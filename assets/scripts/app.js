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

const recentWorks = [
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
  },
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
  },
];

const addWorkCard = () => {
  const recentWorkGridContainer = document.querySelector(
    '.recent-work-grid-container',
  );
  recentWorks.map((work) => {
    const card = document.createElement('div');
    card.classList.add('single-card-container');
    card.innerHTML = `
      <div class="single-card">
          <div class="img-single-work"></div>
          <div class="infos-container">
              <header class="name-single-work">
                  <h3>${work.title}</h3>
              </header>
              <div class="stack-single-work-container">
                  <ul class="stack-single-container">
                    <li class="stack"><a href="#">${work.tags[0]}</a></li>
                    <li class="stack"><a href="#">${work.tags[1]}</a></li>
                    <li class="stack"><a href="#">${work.tags[2]}</a></li>
                    <li class="stack"><a href="#">${work.tags[3]}</a></li>
                  </ul>
              </div>
              <div class="see-project-container">
                  <button class="see-project-text see-project btn" id="${work.id}" type="button">
                      See Project
                  </button>
              </div>
          </div> `;

    recentWorkGridContainer.appendChild(card);
  });
};
addWorkCard();

const blurBg = document.querySelector('.blur-bg');
const modalWrapper = document.querySelector('.modal-wrapper');
const seeProjectButtons = document.querySelectorAll('.see-project');
const closeModalIcon = document.querySelector('#close-modal');

const seeProjectButtonHandler = (index) => {
  blurBg.style.display = 'flex';
  modalWrapper.style.display = 'flex';
};

const closeModalHandler = () => {
  blurBg.style.display = 'none';
  modalWrapper.style.display = 'none';
};

closeModalIcon.addEventListener('click', () => closeModalHandler());


const addEventListenerOnSeeProjectButton = () => {
  seeProjectButtons.forEach((seeProjectButton, index) => {
    seeProjectButton.addEventListener('click', () => seeProjectButtonHandler(index));
  });
};

window.onload = () => {
  addEventListenerOnSeeProjectButton();
};