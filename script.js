const checkbox = document.querySelector('.navigation__checkbox');
const menu = document.querySelector('.bar');

checkbox.addEventListener('click', () => {
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
  }
});

const closePort = document.querySelector('closePort');
closePort.addEventListener('click', close);

const closeAbout = document.querySelector('.closeAbout');
closeAbout.addEventListener('click', close);

const closeContact = document.querySelector('.closeContact');
closeContact.addEventListener('click', close);

const closeEmail = document.querySelector('.closeEmail');
closeEmail.addEventListener('click', close);

const navToggle = document.getElementById('navi-toggle');

function close(){
  navToggle.checked = false;
  if (menu.style.display === 'flex') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'flex';
  }
}
