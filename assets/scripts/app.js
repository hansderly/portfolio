const menu = document.getElementById('mobile-menu');
const openHandler = () => {
  menu.classList.remove('hide');
};
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', openHandler);
