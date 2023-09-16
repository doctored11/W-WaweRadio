
const podcastCards = document.querySelectorAll('.podcast-card');
const showsCard = document.querySelectorAll('.shows__card')

addBackImages(podcastCards);

addBackImages(showsCard);
function addBackImages(target) {
    target.forEach(function (card) {

        const backgroundId = card.getAttribute('data-backgroundId');
        const imagePath = '../res/source/grafic/backs/' + backgroundId + '.png';
        card.style.backgroundImage = 'url(' + imagePath + ') ';
    });
}
