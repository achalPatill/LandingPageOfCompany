document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       Mobile menu toggle
    ========================= */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    /* =========================
       Smooth scrolling
    ========================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* =========================
       Navbar scroll effect
    ========================= */
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    /* =========================
       Intersection Observer
    ========================= */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .service-card, .testimonial-card')
        .forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

    /* =========================
       FAQ Accordion (FIXED)
    ========================= */
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector(".icon");

            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) {
                    item.style.display = "none";
                    item.previousElementSibling
                        .querySelector(".icon").textContent = "+";
                }
            });

            const isOpen = answer.style.display === "block";
            answer.style.display = isOpen ? "none" : "block";
            icon.textContent = isOpen ? "+" : "−";
        });
    });

});
