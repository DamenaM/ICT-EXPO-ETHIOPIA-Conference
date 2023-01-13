const clickhum = document.getElementById('logoburger');
const clickclose = document.getElementById('menubackpop');
const mainmenu = document.getElementById('mainmenu');

clickhum.addEventListener('click', () => {
  if (mainmenu.className === 'main-menu') {
    clickclose.className = 'menuback';
    mainmenu.className = 'hide';

    clickhum.className = 'hide';
  } else {
    clickclose.className = 'menuback';
  }
});

clickclose.addEventListener('click', () => {
  if (clickclose.className === 'menuback') {
    clickclose.className = 'hide';
    mainmenu.className = 'main-menu';

    clickhum.className = 'name';
  }
});
// ---------------------------------- Feature Branch ------------------------
const projects = [
  {
    name: 'H.E. Dr.-Ing Getahun Mekuria',
    title: 'Minister',
    description:
          'Ministry of Innovation and Technology ',
    'image icon': './image/chess.jpg',
    'image mobile': './image/Getahun-Mekuria-150x150.jpg',
    id: 0,
  },
  {
    name: 'Mr. Solomon Kassa',
    title: 'Host',
    description:
          'Tech Talk with Solomon on EBS Show',
    'image icon': './image/chess.jpg',
    'image mobile': './image/Solomon-Kassa-150x150.jpg',
    id: 1,
  },
  {
    name: 'Mulegeta Tameru',
    title: 'Regional Director',
    description:
          'The Millennium Hall in Addis Ababa is the ideal location to host such ',
    'image icon': './image/chess.jpg',
    'image mobile': './image/jelela 2.jpeg',
    id: 2,
  },
  {
    name: 'Mulegeta Tameru',
    title: 'Head of Africa',
    description:
          'World Economic Forum',
    'image icon': './image/chess.jpg',
    'image mobile': './image/jelale 1.jpeg',
    id: 3,
  },
];

projects.forEach((element, k) => {
  const myfeature = document.querySelector('.gridcontainer');
  const projectpopupCard = document.createElement('div');

  const cardDetails = `<section class="featur-section">
  
  <div class="featurs">
  <div>
      <div class="feature">
          <div class="feature-img">
              <img class="image-icon" src="${projects[k]['image icon']}" alt="">
              <img class="image-person" src="${projects[k]['image mobile']}" alt="">
          </div>
          <div>
              <h3>${projects[k].name}</h3>
              <p class="hardware">${projects[k].title}</p>
              <div class="line-feature"></div>
              <h4>${projects[k].description}</h4>
          </div>
      </div>
  </div>
</div>
  
</section>`;

  projectpopupCard.innerHTML += cardDetails;
  myfeature.append(projectpopupCard);
});
