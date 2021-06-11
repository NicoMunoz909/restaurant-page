import loadPorCorte from './por-corte.js';
import loadPlatos from './platos.js';
import loadParrilladas from './parrilladas.js';
import loadGuarniciones from './guarniciones.js';

function loadMenuPage() {

  const removeActives = () => {
    tab1.classList.remove('menu__tab--active');
    tab2.classList.remove('menu__tab--active');
    tab3.classList.remove('menu__tab--active');
    tab4.classList.remove('menu__tab--active');
  }

  const wipeContent = () => {
    const content = document.getElementById('menu-content');
    if (content) {
      menuContainer.removeChild(content);
    }
  }

  document.getElementById('menu').classList.add('--is-active');

  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'container';

  const title = document.createElement('h2');
  title.textContent = "MENU";

  container.appendChild(title);
  document.getElementById('content').appendChild(container);

  const menuContainer = document.createElement('div');
  menuContainer.id = "menu-container";
  container.appendChild(menuContainer);

  const tabsContainer = document.createElement('div');
  tabsContainer.id = "tabs-container";
  tabsContainer.classList.add('menu-tabs')

  const tab1 = document.createElement('div');
  tab1.id = 'por-corte';
  tab1.classList.add('menu__tab');
  tab1.textContent = 'Por Corte';

  const tab2 = document.createElement('div');
  tab2.id = 'platos';
  tab2.classList.add('menu__tab');
  tab2.textContent = 'Platos';

  const tab3 = document.createElement('div');
  tab3.id = 'para-compartir';
  tab3.classList.add('menu__tab');
  tab3.textContent = 'Para Compartir';

  const tab4 = document.createElement('div');
  tab4.id = 'guarniciones';
  tab4.classList.add('menu__tab');
  tab4.textContent = 'Guarniciones';

  tab1.addEventListener('click', removeActives);
  tab1.addEventListener('click', () => {tab1.classList.add('menu__tab--active')});
  tab1.addEventListener('click', wipeContent);
  tab1.addEventListener('click', loadPorCorte);

  tab2.addEventListener('click', removeActives);
  tab2.addEventListener('click', () => {tab2.classList.add('menu__tab--active')});
  tab2.addEventListener('click', wipeContent);
  tab2.addEventListener('click', loadPlatos);

  tab3.addEventListener('click', removeActives);
  tab3.addEventListener('click', () => {tab3.classList.add('menu__tab--active')});
  tab3.addEventListener('click', wipeContent);
  tab3.addEventListener('click', loadParrilladas);

  tab4.addEventListener('click', removeActives);
  tab4.addEventListener('click', () => {tab4.classList.add('menu__tab--active')});
  tab4.addEventListener('click', wipeContent);
  tab4.addEventListener('click', loadGuarniciones);


  tabsContainer.appendChild(tab1);
  tabsContainer.appendChild(tab2);
  tabsContainer.appendChild(tab3);
  tabsContainer.appendChild(tab4);

  menuContainer.appendChild(tabsContainer);



}

export default loadMenuPage;