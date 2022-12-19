const menu = document.getElementById('mobile-menu');
const openHandler = () => {
  menu.classList.remove('hide-menu');
};

const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', openHandler);

const closeMenu = document.querySelector('.close-menu');

const closeMenuHandler = () => {
  menu.classList.add('hide-menu');
};

closeMenu.addEventListener('click', closeMenuHandler);
