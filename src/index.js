import loadInitialPage from './initial-page.js'
import loadAboutUsPage from './about-us.js'
import loadMenuPage from './menu.js'
import loadContactPage from './contact.js'

function wipeContent() {
  const container = document.getElementById('container');
  if (container) {
    document.getElementById('content').removeChild(container);
  }
  document.getElementById('about-us').classList.remove('--is-active');
  document.getElementById('menu').classList.remove('--is-active');
  document.getElementById('contact').classList.remove('--is-active');
}

loadInitialPage();

const aboutUs = document.getElementById("about-us");
aboutUs.addEventListener('click', wipeContent);
aboutUs.addEventListener('click', loadAboutUsPage);

const menu = document.getElementById("menu");
menu.addEventListener('click', wipeContent);
menu.addEventListener('click', loadMenuPage);

const contact = document.getElementById("contact");
contact.addEventListener('click', wipeContent);
contact.addEventListener('click', loadContactPage);