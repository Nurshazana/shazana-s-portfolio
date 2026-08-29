<?php

$projects = [
    [
        "title" => "Project One",
        "description" => "A short description of your project. Explain what you built and what problem it solves.",
        "technologies" => ["PHP", "MySQL", "Bootstrap"],
        "link" => "#"
    ],
    [
        "title" => "Project Two",
        "description" => "Another project description. Mention the main features and technologies used.",
        "technologies" => ["HTML", "CSS", "JavaScript"],
        "link" => "#"
    ],
    [
        "title" => "Project Three",
        "description" => "A third project that demonstrates your technical skills and creativity.",
        "technologies" => ["PHP", "JavaScript", "MySQL"],
        "link" => "#"
    ]
];

$skills = [
    "PHP",
    "HTML5",
    "CSS3",
    "JavaScript",
    "MySQL",
    "Bootstrap",
    "Git",
    "Responsive Design"
];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Personal portfolio website">

    <title>Shazana's | Portfolio</title>

    <!-- Bootstrap -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
        rel="stylesheet"
    >

    <!-- Font Awesome -->
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    >

    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

<!-- ================= NAVBAR ================= -->

<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">

        <a class="navbar-brand" href="#home">
            NM<span>.</span>
        </a>

        <button
            class="navbar-toggler"
            type="button"
            id="menuButton"
            aria-label="Toggle navigation"
        >
            <i class="fa-solid fa-bars"></i>
        </button>

        <div class="navbar-menu" id="navbarMenu">

            <a href="#home" class="nav-link active">Home</a>
            <a href="#about" class="nav-link">About</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>

            <button
                class="theme-button"
                id="themeButton"
                aria-label="Toggle dark mode"
            >
                <i class="fa-solid fa-moon"></i>
            </button>

        </div>

    </div>
</nav>


<!-- ================= HERO ================= -->

<section id="home" class="hero">

    <div class="container">

        <div class="hero-content">

            <div class="hero-text reveal">

                <p class="hero-intro">
                    Hello, I'm
                </p>

                <h1>
                    Shazana
                </h1>

                <h2>
                    System Tester, IT Support &amp; Business Analyst.
                </h2>

                <p class="hero-description">
                    I help organizations improve their systems through software testing,
                    technical support and business analysis. I focus on identifying issues,
                    understanding user needs and translating business requirements into
                    practical technology solutions.
                </p>

                <div class="hero-buttons">

                    <a href="#projects" class="btn btn-primary">
                        View My Work
                    </a>

                    <a href="#contact" class="btn btn-outline-primary">
                        Contact Me
                    </a>

                </div>

                <div class="social-links">

                    <a href="#" aria-label="GitHub">
                        <i class="fa-brands fa-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/nurshazanamalek" aria-label="LinkedIn">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="mailto:nurshazanamalek@gmail.com" aria-label="Email">
                        <i class="fa-solid fa-envelope"></i>
                    </a>

                </div>

            </div>


            <div class="hero-image reveal">

                <div class="profile-circle">

                    <img
                        src="assets/images/nurshazana.jpg"
                        alt="Profile photo"
                    >

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= ABOUT ================= -->

<section id="about" class="section">

    <div class="container">

        <div class="section-heading reveal">

            <span>01.</span>
            <h2>About Me</h2>

        </div>


        <div class="about-content">

            <div class="about-text reveal">

                <p>
                    I have a strong interest in system testing and a natural curiosity about how things work. 
                    I enjoy understanding the processes, exploring how systems are built, and investigating why things fail.
                </p>

                <p>
                    Curiosity drives me to take apart broken gadgets, research interesting topics, explore new ideas, 
                    and build meaningful connections with the people I work with.
                </p>

                <p>
                    My curiosity can start anywhere-from a broken gadget on my desk to the 
                    <a href="https://shorturl.at/ZTnko" target="_blank">Karadeniz LNGT Powership Oceania</a> 
                    vessels I happened to spot across the sea while on holiday.
                </p>

            </div>


            <div class="about-info reveal">

                <div class="info-card">

                    <i class="fa-solid fa-gears"></i>

                    <h3>QA & System Testing </h3>

                    <p>
                        Validating workflows and ensuring system stability.
                    </p>

                </div>


                <div class="info-card">

                    <i class="fa-solid fa-carrot"></i> <i class="fa-solid fa-magnifying-glass"></i>

                    <h3>Root Cause Analysis</h3>

                    <p>
                        Isolating technical issues and analyzing system failures.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= SKILLS ================= -->

<section id="skills" class="section section-alt">

    <div class="container">

        <div class="section-heading reveal">

            <span>02.</span>
            <h2>My Skills</h2>

        </div>


        <div class="skills-grid">

            <?php foreach ($skills as $skill): ?>

                <div class="skill-card reveal">

                    <i class="fa-solid fa-check"></i>

                    <span>
                        <?= htmlspecialchars($skill) ?>
                    </span>

                </div>

            <?php endforeach; ?>

        </div>

    </div>

</section>


<!-- ================= PROJECTS ================= -->

<section id="projects" class="section">

    <div class="container">

        <div class="section-heading reveal">

            <span>03.</span>
            <h2>My Projects</h2>

        </div>


        <div class="projects-grid">

            <?php foreach ($projects as $project): ?>

                <article class="project-card reveal">

                    <div class="project-icon">

                        <i class="fa-solid fa-folder-open"></i>

                    </div>


                    <h3>
                        <?= htmlspecialchars($project["title"]) ?>
                    </h3>


                    <p>
                        <?= htmlspecialchars($project["description"]) ?>
                    </p>


                    <div class="technology-list">

                        <?php foreach ($project["technologies"] as $technology): ?>

                            <span>
                                <?= htmlspecialchars($technology) ?>
                            </span>

                        <?php endforeach; ?>

                    </div>


                    <a
                        href="<?= htmlspecialchars($project["link"]) ?>"
                        class="project-link"
                    >
                        View Project
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>

                </article>

            <?php endforeach; ?>

        </div>

    </div>

</section>


<!-- ================= CONTACT ================= -->

<section id="contact" class="section section-alt">

    <div class="container">

        <div class="contact-container reveal">

            <div class="section-heading">

                <span>04.</span>
                <h2>Get In Touch</h2>

            </div>


            <p class="contact-description">

                I'm always interested in hearing about new projects,
                opportunities and ideas. Feel free to get in touch.

            </p>


            <div class="contact-buttons">

                <a
                    href="mailto:nurshazanamalek@gmail.com"
                    class="btn btn-primary"
                >
                    <i class="fa-solid fa-envelope"></i>
                    Email Me
                </a>


                <a
                    href="https://www.linkedin.com/in/nurshazanamalek"
                    class="btn btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fa-brands fa-linkedin"></i>
                    LinkedIn
                </a>

            </div>

        </div>

    </div>

</section>


<!-- ================= FOOTER ================= -->

<footer>

    <div class="container">

        <p>
            &copy; <?= date("Y") ?> NM.
            All rights reserved.
        </p>

    </div>

</footer>


<!-- Bootstrap JS -->

<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js">
</script>

<!-- Custom JS -->

<script src="assets/js/main.js"></script>

</body>

<script src="assets/js/main.js"></script>

</html>