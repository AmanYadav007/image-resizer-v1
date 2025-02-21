// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    delay: 0.5,
});

gsap.from(".hero p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
});

gsap.from(".hero .rating", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.5,
});

gsap.from(".hero .btn", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 2,
});

// Features Section Animation
gsap.from(".feature", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
    },
    stagger: 0.3,
});

// How It Works Section Animation
gsap.from(".step", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".how-it-works",
        start: "top 80%",
    },
    stagger: 0.3,
});

// Testimonials Section Animation
gsap.from(".testimonial", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
    },
    stagger: 0.3,
});

// FAQ Section Animation
gsap.from(".faq-item", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".faq",
        start: "top 80%",
    },
    stagger: 0.3,
});

// CTA Section Animation
gsap.from(".cta h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
});

gsap.from(".cta .btn", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1,
});



// GSAP Animations (assuming you’ve already included GSAP)
gsap.registerPlugin(ScrollTrigger);

// Hamburger Menu Toggle with GSAP animation
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
        gsap.to(navLinks, {
            duration: 0.3,
            opacity: 0,
            y: -10,
            ease: "power2.out",
            onComplete: () => {
                navLinks.classList.remove('active');
                // Ensure the menu is hidden from screen readers after closing
                navLinks.setAttribute('aria-hidden', 'true');
            }
        });
    } else {
        navLinks.classList.add('active');
        // Ensure the menu is visible to screen readers when opening
        navLinks.setAttribute('aria-hidden', 'false');
        gsap.fromTo(navLinks, 
            { opacity: 0, y: -10 },
            { 
                duration: 0.3, 
                opacity: 1, 
                y: 0, 
                ease: "power2.out" 
            }
        );
    }
});

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', (e) => {
        const navLinks = document.getElementById('nav-links');
        if (window.innerWidth <= 768) { // Only on mobile
            e.preventDefault(); // Prevent default navigation temporarily
            gsap.to(navLinks, {
                duration: 0.3,
                opacity: 0,
                y: -10,
                ease: "power2.out",
                onComplete: () => {
                    navLinks.classList.remove('active');
                    navLinks.setAttribute('aria-hidden', 'true');
                    // Allow navigation after animation
                    setTimeout(() => {
                        window.location.href = link.href;
                    }, 300); // Match animation duration
                }
            });
        }
    });
});


