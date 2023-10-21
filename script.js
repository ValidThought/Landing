new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    anchors: ['Willkommen', 'Video', 'Foerderungen', 'Kontakt'],
    menu: '#menu',
    scrollingSpeed: 1000
});

function backToTop() {
    fullpage_api.moveTo(1);  // Scrollt zur ersten Section
}
