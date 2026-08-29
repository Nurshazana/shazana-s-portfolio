/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navbarMenu = document.getElementById("navbarMenu");

menuButton.addEventListener("click", function () {

    navbarMenu.classList.toggle("show");

    const icon = menuButton.querySelector("i");

    if (navbarMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbarMenu.classList.remove("show");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   DARK MODE
========================= */

const themeButton = document.getElementById("themeButton");

const themeIcon = themeButton.querySelector("i");


function setTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark-mode");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        document.body.classList.remove("dark-mode");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

}


/* Load saved theme */

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {

    setTheme(savedTheme);

}


/* Toggle theme */

themeButton.addEventListener("click", function () {

    const isDark =
        document.body.classList.contains("dark-mode");

    const newTheme = isDark ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem(
        "portfolio-theme",
        newTheme
    );

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
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

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});

