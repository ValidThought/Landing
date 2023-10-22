// Initialisierung von fullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['Willkommen', 'Förderungen', 'Aktuelles', 'Kontakt'],
    menu: '#menu',
});

// Funktion zum Überprüfen, ob ein Element im Viewport sichtbar ist
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

// Funktion zum Scrollen nach oben
function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
