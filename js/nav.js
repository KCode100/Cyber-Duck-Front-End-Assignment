const menuEl = document.querySelector('.togglers__menu');
const navigation = document.querySelector('.navigation__list');

function toggle() {
    const menuImg = 'http://127.0.0.1:5500/images/icon-menu.png';
    const closeImg = 'http://127.0.0.1:5500/images/icon-close.png';
    const currImg = menuEl.src;

    menuEl.classList.toggle('close-icon')

    if(currImg === menuImg) {
        menuEl.setAttribute('src', closeImg);
        navigation.style.height = "auto";
        navigation.style.paddingBottom = "1rem";
    } else {
        menuEl.setAttribute('src', menuImg);
        navigation.style.height = "0px";
        navigation.style.paddingBottom = "0";
    }
}

menuEl.addEventListener('click', toggle);