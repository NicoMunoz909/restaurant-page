function loadParrilladas() {

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

  createItem('Parrillada para 2');
  createItem('Parrillada para 4');
  createItem('Parrillada para 8');

  menuContainer.appendChild(content);

}

export default loadParrilladas;