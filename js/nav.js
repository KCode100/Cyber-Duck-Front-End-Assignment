const menuEl = document.querySelector('.togglers__menu');
const navigation = document.querySelector('.navigation__list');

function toggle() {
    menuEl.classList.toggle('togglers__menu--close')
    navigation.classList.toggle('nav-closed');
}

menuEl.addEventListener('click', toggle);