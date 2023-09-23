
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


///лого анимат



const logos = document.querySelectorAll('.logo');

function handleAnimationEnd(arrow, w1, w2) {
    if (!arrow.classList.contains('arrow-active')) {
        return; 
    }
    
    arrow.classList.remove('arrow-active');
    w1.classList.remove('move-w1');
    w2.classList.remove('grow-w2');
}

function applyAnimation(logo, arrow, w1, w2) {
    arrow.classList.add('arrow-active');
    
    arrow.addEventListener('animationend', () => {
        handleAnimationEnd(arrow, w1, w2);
    }, { once: true });
    w1.classList.add('move-w1');
    w2.classList.add('grow-w2');
    w2.addEventListener('animationend', () => {
        handleAnimationEnd(arrow, w1, w2);
    }, { once: true });
    
   
}

logos.forEach(logo => {
    const arrow = logo.querySelector('.Arrow');
    const w1 = logo.querySelector('.W1');
    const w2 = logo.querySelector('.W2');

    logo.addEventListener('mouseenter', () => {
        applyAnimation(logo, arrow, w1, w2);
    });
});







//микро аудио анимат кругов
const backgroundBlock = document.querySelector('.main__hero ');
const circles = backgroundBlock.querySelectorAll('.circle');

backgroundBlock.addEventListener('mouseenter', () => {
    circles.forEach(circle => {
        circle.classList.add('circle-animate'); 
    });
});

backgroundBlock.addEventListener('mouseleave', () => {
    circles.forEach(circle => {
        circle.addEventListener('animationend', () => {
            circle.classList.remove('circle-animate'); 
        }, { once: true });
    });
});


// 
// buy крутилка
// 

const rotateBlock = document.querySelector('.art__img-back');
const buyBlock = document.querySelector('.buy-block__frame');

function onAnimationEnd() {
    rotateBlock.classList.remove('rotate');
}

buyBlock.addEventListener('mouseenter', () => {
    rotateBlock.classList.remove('rotate');
    setTimeout(() => {
        rotateBlock.classList.add('rotate');
        rotateBlock.addEventListener('animationend', onAnimationEnd);
    }, 5);
});

buyBlock.addEventListener('mouseleave', () => {

    rotateBlock.removeEventListener('animationend', onAnimationEnd);
});
// 
const sinLine = document.querySelector('.buy-block__separator');

buyBlock.addEventListener('mouseenter', () => {
    sinLine.classList.add('buy-block__separator--slide')

});
// 

const about = document.querySelector('.about__frame');
const spiral = document.querySelector('.spiral');
const star = document.querySelector('.star');

about.addEventListener('mouseleave', () => {
    spiral.classList.add('spiral--out');
    spiral.classList.remove('spiral--in');
    star.classList.remove('star--color');


    setTimeout(() => {
        spiral.classList.remove('spiral--out');
    }, 550);
});
// 


about.addEventListener('mouseenter', () => {

    spiral.classList.remove('spiral--out')
    spiral.classList.add('spiral--in')
    star.classList.add('star--color')
});


// const svgElement = document.querySelector('.spiral');
// const path = svgElement.querySelector('path');

// const length = path.getTotalLength();
// console.log('Длина контура:', length);
