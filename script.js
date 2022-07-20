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
  checkbox.addEventListener('click', () => {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
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
const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
function PopUp() {
  if (popupContainer.classList.contains('show')) {
    popupContainer.classList.contains('show');
  } else {
    popupContainer.classList.add('show');
  }
}
popup.addEventListener('click', PopUp);

const closeBtn = () => {
  popupContainer.classList.remove('show');
};
closeBtn();

const myArray = [
  {
    heading: 'Keeping track of hundreds  of components website',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    technologies: ['Css', 'Html', 'Ruby on Rails'],
    image: ['Snapshoot.png', 'popExport.png', 'pop-GitHub.png'],
  },
];

document.getElementById('popup-container').innerHTML = myArray.map((myArray) => (
  `<div class="overlay"></div>
  <div class="popup-content" id="popupContent">
    <div class="pop-header">
        <p class="pop-text">${myArray.heading}</p>
        <span class="popup-close" id="popupClose" onclick="closeBtn()"></span>
    </div>
    <ul class="pop-skills">
        <li class="skills-li"><a class="skills-a">${myArray.technologies[0]}</a></li>
        <li class="skills-li"><a class="skills-a">${myArray.technologies[1]}</a></li>
        <li class="skills-li"><a class="skills-a">${myArray.technologies[2]}</a></li>
    </ul>
    <div class="img-text">
      <img src="img/${myArray.image[0]}" class="pop-img" alt="popup-image">
      <div class="text-container">
        <p>${myArray.description}</p>
        <div class="pop-link">
            <a href="#" class="pop-button">See Project<img src="img/${myArray.image[1]}" class="pop-src"></a>
            <a href="#" class="pop-button">See Project<img src="img/${myArray.image[2]}" class="pop-src"></a>
        </div>
      </div>
    </div>
  </div>`
)).join('');

// portfolio project popup

const portfolios = [
  {
    id: 1,
    title: '',
    details: '',
    skills: '',
    btn: 'See project',
    classname: 'popPort1',
  },
  {
    id: 2,
    title: 'Data Dashboard Healthcare',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'bootstrap', 'Ruby'],
    btn: 'See project',
    classname: 'popPort2',
  },
  {
    id: 3,
    title: 'Website Portfolio',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'bootstrap', 'Ruby'],
    btn: 'See project',
    classname: 'popPort3',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data More',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'bootstrap', 'Ruby'],
    btn: 'See project',
    classname: 'popPort4',
  },
  {
    id: 5,
    title: 'Data Dashboard Healthcare',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'bootstrap', 'Ruby'],
    btn: 'See project',
    classname: 'popPort5',
  },
  {
    id: 6,
    title: 'Website Portfolio',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'bootstrap', 'Ruby'],
    btn: 'See project',
    classname: 'popPort6',
  },
];

document.getElementById('grid-container').innerHTML = portfolios.map((port) => (
  `<div class="work work--4-${port.id}">
  <div class="container">
    <h1 class="p1">${port.title}</h1>
    <p>${port.details}</p>
    <div class="languages">
        <a href="" class="button">${port.skills[0]}</a>
        <a href="" class="button">${port.skills[1]}</a>
        <a href="" class="button">${port.skills[2]}</a>
    </div>
    <button class="link ${port.classname}" id="myBtn">${port.btn}</button>
  </div>
</div>`
)).join('');

// work1

const gridPort = document.querySelector('.popup-container');
const popPort1 = document.querySelector('.popPort1');
function popPorta() {
  if (gridPort.classList.contains('show')) {
    gridPort.classList.contains('show');
  } else {
    gridPort.classList.add('show');
  }
}
popPort1.addEventListener('click', popPorta);

// work2

const popPort2 = document.querySelector('.popPort2');
function popPortb() {
  if (gridPort.classList.contains('show')) {
    gridPort.classList.contains('show');
  } else {
    gridPort.classList.add('show');
  }
}
popPort2.addEventListener('click', popPortb);

// work3

const popPort3 = document.querySelector('.popPort3');
function popPortc() {
  if (gridPort.classList.contains('show')) {
    gridPort.classList.contains('show');
  } else {
    gridPort.classList.add('show');
  }
}
popPort3.addEventListener('click', popPortc);

// work4

const popPort4 = document.querySelector('.popPort4');
function popPortd() {
  if (gridPort.classList.contains('show')) {
    gridPort.classList.contains('show');
  } else {
    gridPort.classList.add('show');
  }
}
popPort4.addEventListener('click', popPortd);

// work5

const popPort5 = document.querySelector('.popPort5');
function popPorte() {
  if (gridPort.classList.contains('show')) {
    gridPort.classList.contains('show');
  } else {
    gridPort.classList.add('show');
  }
}
popPort5.addEventListener('click', popPorte);

// work6

const popPort6 = document.querySelector('.popPort6');
function popPortf() {
  if (gridPort.classList.contains('show')) {
    gridPort.classList.contains('show');
  } else {
    gridPort.classList.add('show');
  }
}
popPort6.addEventListener('click', popPortf);
//Form validation
const contactForm = document.querySelector('#frmContact');
const email = document.querySelector('#email');
const validationMassege = contactForm.querySelector('#error');
validationMassege.style.color = '#ff0000';
validationMassege.style.fontSize = '16px';
validationMassege.style.fontWeight = 'bold';
validationMassege.style.padding = '4px';
validationMassege.style.borderRadius = '2px';
contactForm.addEventListener('submit', (event) => {
  let isValid = false;
  if (email.value === email.value.toLowerCase()) {
    isValid = true;
  }
  if (isValid === false) {
    event.preventDefault();
    validationMassege.innerText = 'Only Lower Case Symbols Allowed';
    setTimeout(() => {
      validationMassege.textContent = '';
    }, 5000);
  }
});
