const hb = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header');
const body = document.querySelector('body');

hb.addEventListener('click', () => {
   menu.classList.toggle('active');
   body.classList.toggle('lock');
})