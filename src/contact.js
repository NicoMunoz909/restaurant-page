function loadContactPage() {

  document.getElementById('contact').classList.add('--is-active');

  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'container';

  const title = document.createElement('h2');
  title.textContent = "CONTACT";

  const telephone = document.createElement('p');
  telephone.textContent = "Telephone: +12 345 678 90"

  const adress = document.createElement('p');
  adress.textContent = "Address: 742 Evergreen Terrace";

  container.appendChild(title);
  container.appendChild(telephone);
  container.appendChild(adress);
  document.getElementById('content').appendChild(container);
}

export default loadContactPage;