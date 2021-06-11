function loadPlatos() {

  const createItem = (title) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('menu__item')

    const itemTitle = document.createElement('p');
    itemTitle.textContent = `${title}`;

    const itemPrice = document.createElement('p');
    itemPrice.textContent = "$$$";

    itemContainer.appendChild(itemTitle);
    itemContainer.appendChild(itemPrice);

    content.appendChild(itemContainer);
  }

  const menuContainer = document.getElementById('menu-container');

  const description = document.createElement('p');
  description.textContent = "Loren Ipsum Dolor Sit Amet";
  description.classList.add('menu__description');

  const content = document.createElement('div');
  content.classList.add('content');
  content.classList.add('menu__content');
  content.id = 'menu-content';


  content.appendChild(description);

  createItem('Matambre (Cerdo o Tenera) a la pizza');
  createItem('Bondiola a la barbacoa');

  menuContainer.appendChild(content);

}

export default loadPlatos;