import IMAGE_URL from './imgURL.mjs';

const content = document.querySelector('.content-wrapper');
const description = document.querySelectorAll('.content');

let imageURL = document.getElementById('content-image');

const handleButtonClick = (event) => {
  const id = event.target.dataset.id;

  if (id) {
    description.forEach((desc) => {
      desc.classList.remove('display');
    });

    const element = document.getElementById(id);
    element.classList.add('display');
    element.childNodes[1].style.color = id;

    if (id === 'green') imageURL.src = IMAGE_URL.green;
    if (id === 'blue') imageURL.src = IMAGE_URL.blue;
    if (id === 'pink') imageURL.src = IMAGE_URL.pink;
  }
};

content.addEventListener('click', handleButtonClick);
