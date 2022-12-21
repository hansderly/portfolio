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
    img: '../assets/images/modal-lg.png',
    seeLive: 'http://ansderly.me/portfolio/',
    seeSource: 'https://github.com/hansderly',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
                            with the relea
`,
  },
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
    img: '../assets/images/modal-lg.png',
    seeLive: 'http://ansderly.me/portfolio/',
    seeSource: 'https://github.com/hansderly',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
                            with the relea
`,
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
    img: '../assets/images/modal-lg.png',
    seeLive: 'http://ansderly.me/portfolio/',
    seeSource: 'https://github.com/hansderly',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
                            with the relea
`,
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
    img: '../assets/images/modal-lg.png',
    seeLive: 'http://ansderly.me/portfolio/',
    seeSource: 'https://github.com/hansderly',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
                            with the relea
`,
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
    img: '../assets/images/modal-lg.png',
    seeLive: 'http://ansderly.me/portfolio/',
    seeSource: 'https://github.com/hansderly',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
                            with the relea
`,
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['Ruby', 'Css', 'JavaScript', 'Html'],
    modalTagDesktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    modalTagMobile: ['Ruby on Rails', 'Css', 'Javascript'],
    img: '../assets/images/modal-lg.png',
    seeLive: 'http://ansderly.me/portfolio/',
    seeSource: 'https://github.com/hansderly',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has
                            been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
                            with the relea
`,
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

const closeModalHandler = () => {
  blurBg.style.display = 'none';
  modalWrapper.style.display = 'none';
};

const seeProjectButtonHandler = (index) => {
  const currentWork = recentWorks[index];
  const modal = document.querySelector('.modal');
  modal.innerHTML = `
  <div class="modal-content">

                <div class="close-modal" id="close-modal">
                    <img class="close-modal-icon" src="./assets/icons/close-modal.svg" alt="close modal icon">
                </div>
                <div class="modal-image-header-container">
                    <img class="modal-image-header" src="${currentWork.img}" alt="modal image cover"
                        srcset="">
                </div>

                <div class="modal-infos-container">
                    <div class="modal-title-and-live-container">
                        <div class="modal-title-container">
                            <p class="modal-title">${currentWork.title}</p>
                        </div>
                        <a href="${currentWork.seeLive}">
                            <div class="modal-live-and-source-container desktop">
                                <div class="live-container">
                                    <p class="live-source-text">See live</p>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
                                            fill="white" />
                                    </svg>
                                </div>
                        </a>
                        <a href="${currentWork.seeSource}">
                            <div class="source-container">
                                <p class="live-source-text">See source</p>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.9991 7.46114C17.9991 6.32124 17.6331 5.25043 16.9344 4.31779C17.2006 3.41969 17.2671 2.27979 17.2006 0.967185C17.1673 0.414508 16.7348 0 16.2024 0C15.903 0 13.3743 0.0345423 11.9104 1.38169C10.6461 1.1399 9.3152 1.1399 8.0176 1.38169C6.58692 0.0345423 4.05826 0 3.72555 0C3.1932 0 2.76067 0.414508 2.7274 0.967185C2.62758 2.27979 2.7274 3.41969 2.99357 4.31779C2.29486 5.28497 1.92887 6.35579 1.92887 7.46114C1.92887 9.8791 3.72555 12.0553 6.45383 13.0915C6.35401 13.2988 6.28747 13.5406 6.22093 13.7824C3.32629 13.4715 1.96215 10.7427 1.8956 10.639C1.6627 10.1209 1.06381 9.91364 0.564734 10.19C0.0656586 10.4318 -0.133972 11.0535 0.132202 11.5717C0.198745 11.7444 2.02869 15.4404 6.05457 15.8549V18.9637C6.05457 19.5509 6.4871 20 7.05272 20H12.8753C13.4409 20 13.8734 19.5509 13.8734 18.9637V14.8532C13.8734 14.2314 13.7403 13.6442 13.5074 13.1261C16.2024 12.0553 17.9991 9.91364 17.9991 7.46114Z"
                                        fill="white" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="modal-tags-container desktop">
                    <ul>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagDesktop[0]}</a></li>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagDesktop[1]}</a></li>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagDesktop[2]}</a></li>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagDesktop[3]}</a></li>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagDesktop[4]}</a></li>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagDesktop[5]}</a></li>
                    </ul>
                </div>
                <div class="modal-tags-container mobile">
                    <ul>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagMobile[0]}</a></li>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagMobile[0]}</a></li>
                        <li class="modal-tag"><a href="#">${currentWork.modalTagMobile[0]}</a></li>
                    </ul>
                </div>
                <div class="modal-descripton-container">
                    <p class="modal-description">${currentWork.description}</p>
                </div>

                <div class="modal-live-and-source-container mobile">
                    <a href="${currentWork.seeLive}">
                        <div class="live-container">
                            <p class="live-source-text">See live</p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </a>
                    <a href="${currentWork.seeSource}">
                        <div class="source-container">
                            <p class="live-source-text">See source</p>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.9991 7.46114C17.9991 6.32124 17.6331 5.25043 16.9344 4.31779C17.2006 3.41969 17.2671 2.27979 17.2006 0.967185C17.1673 0.414508 16.7348 0 16.2024 0C15.903 0 13.3743 0.0345423 11.9104 1.38169C10.6461 1.1399 9.3152 1.1399 8.0176 1.38169C6.58692 0.0345423 4.05826 0 3.72555 0C3.1932 0 2.76067 0.414508 2.7274 0.967185C2.62758 2.27979 2.7274 3.41969 2.99357 4.31779C2.29486 5.28497 1.92887 6.35579 1.92887 7.46114C1.92887 9.8791 3.72555 12.0553 6.45383 13.0915C6.35401 13.2988 6.28747 13.5406 6.22093 13.7824C3.32629 13.4715 1.96215 10.7427 1.8956 10.639C1.6627 10.1209 1.06381 9.91364 0.564734 10.19C0.0656586 10.4318 -0.133972 11.0535 0.132202 11.5717C0.198745 11.7444 2.02869 15.4404 6.05457 15.8549V18.9637C6.05457 19.5509 6.4871 20 7.05272 20H12.8753C13.4409 20 13.8734 19.5509 13.8734 18.9637V14.8532C13.8734 14.2314 13.7403 13.6442 13.5074 13.1261C16.2024 12.0553 17.9991 9.91364 17.9991 7.46114Z"
                                    fill="white" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
  `;
  blurBg.style.display = 'flex';
  modalWrapper.style.display = 'flex';
  const closeModalIcon = document.querySelector('#close-modal');
  closeModalIcon.addEventListener('click', () => closeModalHandler());
};


const addEventListenerOnSeeProjectButton = () => {
  seeProjectButtons.forEach((seeProjectButton, index) => {
    seeProjectButton.addEventListener('click', () => seeProjectButtonHandler(index));
  });
};

addEventListenerOnSeeProjectButton();