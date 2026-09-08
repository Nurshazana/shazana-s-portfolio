/* =========================
   MOBILE MENU & TOGGLE
========================= */

/* =========================
   MOBILE MENU & TOGGLE
========================= */

const certificationsToggle = document.getElementById("certificationsToggle");
const moreCertifications = document.getElementById("moreCertifications");

if (certificationsToggle && moreCertifications) {
    certificationsToggle.addEventListener("click", function () {
        const expanded = certificationsToggle.getAttribute("aria-expanded") !== "true";
        moreCertifications.hidden = !expanded;
        certificationsToggle.setAttribute("aria-expanded", String(expanded));
        certificationsToggle.textContent = expanded
            ? "View Fewer Certifications"
            : "View More Certifications";
    });
}

const menuButton = document.getElementById("menuButton");
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".nav-link");
const pageLoader = document.getElementById("pageLoader");
const backToTop = document.getElementById("backToTop");

window.addEventListener("load", function () {
    if (pageLoader) {
        pageLoader.classList.add("is-hidden");
    }
});

if (menuButton && navbarMenu) {
    // Toggle menu open/close on button click
    menuButton.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");
        updateMenuIcon();
    });
}

// Function to update icon state between bars and X
function updateMenuIcon() {
    if (!menuButton) return;
    const icon = menuButton.querySelector("i");
    if (icon) {
        if (navbarMenu.classList.contains("show")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }
}

// Close mobile menu & reset icon when any link is clicked
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbarMenu && navbarMenu.classList.contains("show")) {
            navbarMenu.classList.remove("show");
            updateMenuIcon();
        }
    });
});

/* =========================
   DARK MODE
========================= */

const themeButton = document.getElementById("themeButton");
const themeIcon = themeButton ? themeButton.querySelector("i") : null;

function setTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    } else {
        document.body.classList.remove("dark-mode");
        if (themeIcon) {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
        }
    }
}

/* Apply the shared theme on every page, including pages without a toggle. */
setTheme(localStorage.getItem("portfolio-theme"));

/* Keep other open portfolio pages in sync with the selected theme. */
window.addEventListener("storage", function (event) {
    if (event.storageArea === localStorage && (event.key === "portfolio-theme" || event.key === null)) {
        setTheme(event.newValue);
    }
});

if (themeButton) {
    /* Toggle theme */
    themeButton.addEventListener("click", function () {
        const isDark = document.body.classList.contains("dark-mode");
        const newTheme = isDark ? "light" : "dark";

        setTheme(newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    });
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

document.querySelectorAll(".projects-grid, .skills-grid, .certificates-grid").forEach(function (grid) {
    grid.querySelectorAll(".reveal").forEach(function (card, index) {
        card.style.transitionDelay = Math.min(index * 70, 350) + "ms";
    });
});

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    observer.observe(element);
});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
    let currentSection = "";

    sections.forEach(function (section) {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });

    if (backToTop) {
        backToTop.classList.toggle("is-visible", window.scrollY > 500);
    }
});

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
