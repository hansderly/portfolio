const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeMenu = document.querySelector('.close-menu');
const mobileLinks = document.getElementById('mobile-links');

const openHandler = () => {
  menu.classList.remove('hide-menu');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', (e) => { e.preventDefault(); });
};

menuIcon.addEventListener('click', openHandler);

const closeMenuHandler = () => {
  menu.classList.add('hide-menu');
  document.body.removeEventListener('touchmove');
  document.body.classList.remove('stop-scrolling');
};

closeMenu.addEventListener('click', closeMenuHandler);

mobileLinks.addEventListener('click', closeMenuHandler);
