// Initialisierung von fullPage.js
// Initialisierung von fullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['Willkommen', 'Förderungen', 'Aktuelles', 'Kontakt'],
    menu: '#menu',
});

// Funktion zum Scrollen nach oben
function backToTop() {
    fullpage_api.moveTo(1);  // Scrollt zu Abschnitt 1
}