// Initialisierung von fullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['Willkommen', 'Förderungen', 'Aktuelles', 'Kontakt'],
    menu: '#menu',
    // Optionen für das Ein- und Ausblenden von Abschnitten
    onLeave: function(origin, destination, direction){
        var leavingSection = this;

        // Nach dem Verlassen des Abschnitts 2
        if(origin.index == 1 && direction =='down'){
            alert("Going to section 3!");
        }

        else if(origin.index == 1 && direction == 'up'){
            alert("Going to section 1!");
        }
    }
});

// Funktion zum Scrollen nach oben
function backToTop() {
    fullpage_api.moveTo(1);  // Scrollt zu Abschnitt 1
}
