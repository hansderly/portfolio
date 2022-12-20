const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeMenu = document.querySelector('.close-menu');
const mobileLinks = document.getElementById('mobile-links');

const openHandler = () => {
  menu.classList.remove('hide-menu');
};

menuIcon.addEventListener('click', openHandler);

const closeMenuHandler = () => {
  menu.classList.add('hide-menu');
};

closeMenu.addEventListener('click', closeMenuHandler);

mobileLinks.addEventListener('click', closeMenuHandler);

const workCardDetail = [
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
  },
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
  },
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
  },
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
  },
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
  },
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
  },
];
