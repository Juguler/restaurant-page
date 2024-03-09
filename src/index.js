import loadPage from './modules/initial-page-load';
import loadHome from './modules/homepage';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';
import './style.css';

init();

function addNavEvents() {
  const homeBtn = document.getElementById('Home');
  const menuBtn = document.getElementById('Menu');
  const contactBtn = document.getElementById('Contact');

  homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  contactBtn.addEventListener('click', loadContact);
}
function init() {
  loadPage();
  loadHome();
  addNavEvents();
}