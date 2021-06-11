function loadAboutUsPage() {

  document.getElementById('about-us').classList.add('--is-active');

  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'container';

  const title = document.createElement('h2');
  title.textContent = "ABOUT US"

  const paragraph = document.createElement('p');
  paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a ligula sit amet orci elementum vehicula ut eget nulla. Praesent facilisis ex vel odio convallis gravida. Mauris blandit nisl non massa varius, a ultrices eros finibus. Etiam non nulla sit amet dolor tincidunt sodales. Phasellus sollicitudin vulputate aliquam. Donec tristique dignissim quam. Aliquam id aliquam enim. Fusce in massa sed eros dignissim consectetur sagittis condimentum mauris. Praesent in lectus eu enim luctus efficitur ac in quam. Phasellus aliquet rutrum erat, a elementum eros euismod in.";
  
  container.appendChild(title);
  container.appendChild(paragraph);

  document.getElementById('content').appendChild(container);
}

export default loadAboutUsPage;