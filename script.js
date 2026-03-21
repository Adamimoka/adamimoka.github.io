// Scroll-spy nav border
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
    if (e.isIntersecting) {
        // Stagger siblings
        const siblings = [...e.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const idx = siblings.indexOf(e.target);
        setTimeout(() => {
        e.target.classList.add('visible');
        }, idx * 80);
        observer.unobserve(e.target);
    }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));
