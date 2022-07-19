const checkbox = document.querySelector('.navigation__checkbox');
const menu = document.querySelector('.bar');
const navToggle = document.getElementById('navi-toggle');

checkbox.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
});

function closeNav() {
  navToggle.checked = false;
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

const closePort = document.querySelector('.closePort');
closePort.addEventListener('click', closeNav);

const closeAbout = document.querySelector('.closeAbout');
closeAbout.addEventListener('click', closeNav);

const closeContact = document.querySelector('.closeContact');
closeContact.addEventListener('click', closeNav);

const closeEmail = document.querySelector('.closeEmail');
closeEmail.addEventListener('click', closeNav);

// popup
let popupContainer = document.querySelector('.popup-container');
let myArray = [
  {
    heading: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['Css', 'Html', 'Ruby on Rails'],
    image: ['Snapshoot.png', 'Icon-see.svg', 'githubpop.png']
  }
];

document.getElementById('popup-container').innerHTML = myArray.map(myArray =>
  `
  <div class="overlay"></div>
  <div class="popup-content" id="popupContent">
      <div class="pop-header">
          <p class="pop-text">${myArray.heading}</p>
          <span class="popup-close" id="popupClose"></span>
      </div>
      <ul class="pop-skills">
          <li><a>${myArray.technologies[0]}</a></li>
          <li><a>${myArray.technologies[1]}</a></li>
          <li><a>${myArray.technologies[2]}</a></li>
      </ul>
  <div class="img-text">
      <img src="img/${myArray.image}" class="pop-img" alt="popup-image">
      <div class="text-container">
          <p>${myArray.description}</p>
          <div class="pop-link">
              <a href="" class="pop-button">See Project<img src="img/${myArray.image[1]}"></a>
              <a href="" class="pop-button">See Project<img src="img/${myArray.image[2]}"></a>
          </div>
      </div>
  </div>`
).join("");

