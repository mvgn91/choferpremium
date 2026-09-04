/**
 * Chofer Premium — Demo App
 * Handles WhatsApp, scroll reveal, counter animation, and presentation tour
 */

document.addEventListener('DOMContentLoaded', () => {
    // ===== LUCIDE ICONS =====
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    // Número de contacto para informes de la demostración
    const PHONE_NUMBER = '523322621939';
    const MESSAGES = {
        standard: "Hola, me interesa la demo de 'Chofer Premium' (servicio de chofer privado). Me gustaría recibir más información del proyecto.",
        recurrent: "Hola, vi la demo de servicios recurrentes de 'Chofer Premium'. Me gustaría saber más del proyecto."
    };

    // ===== THEME TOGGLE =====
    const themeBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    root.setAttribute('data-theme', currentTheme);
    updateIcons(currentTheme);

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateIcons(currentTheme);
    });

    function updateIcons(theme) {
        sunIcon.style.display = theme === 'dark' ? 'block' : 'none';
        moonIcon.style.display = theme === 'dark' ? 'none' : 'block';
    }

    // ===== WHATSAPP BUTTONS =====
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const type = btn.getAttribute('data-type') || 'standard';
            const link = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(MESSAGES[type])}`;
            window.open(link, '_blank');
        });
    });

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('visible'));
    }

    // ===== COUNTER ANIMATION =====
    const counters = document.querySelectorAll('.count-up');
    if (counters.length && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-target'));
                    const suffix = el.getAttribute('data-suffix') || '';
                    animateCounter(el, target, suffix);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => counterObserver.observe(c));
    }

    function formatCountValue(value, suffix) {
        if (suffix === '%') return value + '%';
        return (value >= 1000 ? value.toLocaleString() : value) + '+';
    }

    function animateCounter(el, target, suffix) {
        const duration = 1200;
        const start = performance.now();
        
        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            
            el.textContent = formatCountValue(current, suffix);
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.classList.add('counted');
                el.textContent = formatCountValue(target, suffix);
            }
        }
        
        requestAnimationFrame(update);
    }

    // ===== PRESENTATION MODE (TOUR) =====
    const tourToggle = document.getElementById('tourToggle');
    const tourTooltip = document.getElementById('tourTooltip');
    const tourText = document.getElementById('tourText');
    const tourCounter = document.getElementById('tourCounter');
    const tourPrev = document.getElementById('tourPrev');
    const tourNext = document.getElementById('tourNext');
    const tourClose = document.getElementById('tourClose');

    // Collect all sections with data-tour
    const tourSections = document.querySelectorAll('[data-tour]');
    let tourActive = false;
    let currentTourIndex = 0;

    if (tourToggle && tourSections.length) {
        tourToggle.addEventListener('click', toggleTour);
        tourClose.addEventListener('click', endTour);
        tourPrev.addEventListener('click', () => navigateTour(-1));
        tourNext.addEventListener('click', () => navigateTour(1));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!tourActive) return;
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigateTour(-1);
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigateTour(1);
            if (e.key === 'Escape') endTour();
        });
    }

    function toggleTour() {
        if (tourActive) {
            endTour();
        } else {
            startTour();
        }
    }

    function startTour() {
        tourActive = true;
        tourToggle.classList.add('active');
        currentTourIndex = 0;
        showTourStep(currentTourIndex);
        tourTooltip.classList.add('visible');
        // Scroll to first section
        tourSections[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function endTour() {
        tourActive = false;
        tourToggle.classList.remove('active');
        tourTooltip.classList.remove('visible');
        // Remove all highlights
        tourSections.forEach(s => s.classList.remove('tour-highlight'));
    }

    function navigateTour(direction) {
        const newIndex = currentTourIndex + direction;
        if (newIndex < 0 || newIndex >= tourSections.length) return;
        currentTourIndex = newIndex;
        showTourStep(currentTourIndex);
        const section = tourSections[currentTourIndex];
        section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function showTourStep(index) {
        const section = tourSections[index];
        if (!section) return;

        // Remove all highlights
        tourSections.forEach(s => s.classList.remove('tour-highlight'));
        // Highlight current
        section.classList.add('tour-highlight');

        // Get the text from data-tour or generate from heading
        let text = section.getAttribute('data-tour');
        if (!text) {
            const heading = section.querySelector('h2, h1');
            text = heading ? heading.textContent : 'Sección de la demo';
        }
        tourText.textContent = text;
        tourCounter.textContent = `${index + 1}/${tourSections.length}`;

        // Enable/disable nav buttons
        tourPrev.style.opacity = index === 0 ? '0.3' : '1';
        tourPrev.style.pointerEvents = index === 0 ? 'none' : 'auto';
        tourNext.style.opacity = index === tourSections.length - 1 ? '0.3' : '1';
        tourNext.style.pointerEvents = index === tourSections.length - 1 ? 'none' : 'auto';
    }

    // ===== DETAILS DROPDOWN RE-ANIMATION =====
    document.querySelectorAll('details').forEach(details => {
        details.addEventListener('toggle', () => {
            if (details.open) {
                const content = details.querySelector('.stats-content');
                if (content) {
                    content.style.animation = 'none';
                    content.offsetHeight;
                    content.style.animation = '';
                }
            }
        });
    });
});
