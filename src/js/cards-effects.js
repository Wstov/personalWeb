const cards = document.querySelectorAll('.card');
const titles = document.querySelectorAll('.title-effect');
const button = document.querySelectorAll('.learn-more');
const paragraphs = document.querySelectorAll('.text-effects');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showCardsWithEffect() {
    cards.forEach((card, index) => {
        if (isElementInViewport(card)) {
            setTimeout(() => {
                card.style.opacity = '1';
                card.classList.add('tilt-in-fwd-bl');
            }, index * 300);
        }
    });
}

function showTitleWithEffect() {
    titles.forEach((title, index) => {
        if (isElementInViewport(title)) {
            setTimeout(() => {
                title.style.opacity = '1';
                title.classList.add('text-focus-in');
            }, index * 300);
        } else {
            title.style.opacity = '0';
            title.classList.remove('text-focus-in')
        }
    });
}

function showButtonWithEffect() {
    button.forEach((but, index) => {
        if (isElementInViewport(but)) {
            setTimeout(() => {
                but.style.opacity = '1';
                but.classList.add('slide-in-top');
            }, index * 1000);
        }
    });
}


function showParagraphWithEffect() {
    paragraphs.forEach((paragraph, index) => {
        if (isElementInViewport(paragraph)) {
            setTimeout(() => {
                paragraph.style.opacity = '1';
                paragraph.classList.add('puff-in-center');
            }, index * 300);
        }
    });
}


window.addEventListener('scroll', function () {
    showCardsWithEffect();
    showTitleWithEffect();
    showButtonWithEffect()
    showParagraphWithEffect()
});




