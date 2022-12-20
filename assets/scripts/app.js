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
                                ${work.tags.map((w) => `<li class="stack"><a href="#">${w}</a></li>`)}
                            </ul>
                        </div>
                        <div class="see-project-container">
                            <button class="see-project-text see-project btn" id="${work.id}" type="button">
                                See Project
                            </button>
                        </div>
                    </div>

    `;
    recentWorkGridContainer.appendChild(card);
  });
};

addWorkCard();