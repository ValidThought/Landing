new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['Willkommen', 'Video', 'Foerderungen', 'Kontakt', 'Aktuelles'],
    menu: '#menu',
    scrollingSpeed: 1000
});

function backToTop() {
    fullpage_api.moveTo(1);  // Scrollt zur ersten Section
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Funktion zum Hinzufügen der Klasse 'in-view' zu Sektionen im Viewport
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
}

// Event-Listener für Scroll-Ereignisse
window.addEventListener('scroll', handleScroll);

// Initialer Aufruf der handleScroll-Funktion
handleScroll();