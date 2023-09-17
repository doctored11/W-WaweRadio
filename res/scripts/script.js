
const podcastCards = document.querySelectorAll('.podcast-card');
const showsCard = document.querySelectorAll('.shows__card')
const playCards = document.querySelectorAll('.card--playlists');
const flags = document.querySelectorAll('.card__absolute-logo--flag');
const peoplesCards = document.querySelectorAll('.card--about');

addBackImages(podcastCards);

addBackImages(showsCard);
addBackImages(playCards);
addBackImages(flags);
addBackImages(peoplesCards);
function addBackImages(target) {
    target.forEach(function (card) {

        const backgroundId = card.getAttribute('data-backgroundId');
        const imagePath = '../res/source/grafic/backs/' + backgroundId + '.png';
        card.style.backgroundImage = 'url(' + imagePath + ') ';
    });
}
