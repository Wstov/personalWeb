const theToggle = document.getElementById('toggle');
const aside = document.getElementById('myMenu');
const divDark = document.getElementById('myDiv');
let isAsideOpen = false;
// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function () {
    toggleClass(this, 'on');

    return false;
}

// Button to show and hide the aside

theToggle.addEventListener('click', () => {
    if (isAsideOpen) {
        aside.style.left = '-100%';
        divDark.style.left = '-100%';
        // document.getElementById('myDiv').classList.remove('dark')
    } else {
        aside.style.left = '0';
        divDark.style.left = '0';
        // document.getElementById('myDiv').classList.add('dark')

    }
    isAsideOpen = !isAsideOpen;
});

divDark.addEventListener('click', () => {
    if (isAsideOpen) {
        aside.style.left = '-100%';
        divDark.style.left = '-100%';
        document.getElementById('toggle').classList.remove('on')
        isAsideOpen = false;
    }
})