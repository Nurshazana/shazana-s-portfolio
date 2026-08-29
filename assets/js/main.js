/* =========================
   MOBILE MENU & TOGGLE
========================= */

const menuButton = document.getElementById("menuButton");
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuButton && navbarMenu) {
    menuButton.addEventListener("click", function () {
        navbarMenu.classList.toggle("show");

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
    });
}

/* Close mobile menu on link click */
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navbarMenu) {
            navbarMenu.classList.remove("show");
        }

        if (menuButton) {
            const icon = menuButton.querySelector("i");
            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });
});


/* =========================
   DARK MODE
========================= */

const themeButton = document.getElementById("themeButton");

if (themeButton) {
    const themeIcon = themeButton.querySelector("i");

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

    /* Load saved theme */
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
        setTheme(savedTheme);
    }

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
});