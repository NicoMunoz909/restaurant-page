function loadInitialPage() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  
  const title = document.createElement('h1');
  title.textContent = "LAS BRASAS";
  sidebar.appendChild(title);

  const navigation = document.createElement('div');
  navigation.classList.add('navigation');

  const aboutUs = document.createElement('p');
  aboutUs.textContent = "About Us";
  aboutUs.id = "about-us";
  aboutUs.classList.add('navigation__button');

  const menu = document.createElement('p');
  menu.textContent = "Menu";
  menu.id = "menu";
  menu.classList.add('navigation__button');

  const contact = document.createElement('p');
  contact.textContent = "Contact";
  contact.id = "contact";
  contact.classList.add('navigation__button');

  navigation.appendChild(aboutUs);
  navigation.appendChild(menu);
  navigation.appendChild(contact);

  sidebar.appendChild(navigation);

  const content = document.getElementById('content');
  content.appendChild(sidebar);
}

export default loadInitialPage;