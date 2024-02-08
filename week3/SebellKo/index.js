const profileImage = document.getElementById('profileImage');
const profileName = document.getElementById('profileName');
const profileJob = document.getElementById('profileJob');
const writtenReview = document.getElementById('writtenReview');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const randomBtn = document.getElementById('randomBtn');

const REVIEWS = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
const FIRST_CONTENT = 1;
const LAST_CONTENT = REVIEWS.length;

let currentId = 0;

const createRandom = () => {
  return Math.floor(Math.random() * LAST_CONTENT) + FIRST_CONTENT;
};

const resetReview = () => {
  profileName.removeChild(profileName.childNodes[0]);
  profileJob.removeChild(profileJob.childNodes[0]);
  writtenReview.removeChild(writtenReview.childNodes[0]);
};

const addNewContent = () => {
  const [review] = REVIEWS.filter((review) => review.id === currentId);
  profileImage.src = review.img;
  profileName.insertAdjacentText('afterbegin', review.name);
  profileJob.insertAdjacentText('afterbegin', review.job);
  writtenReview.insertAdjacentText('afterbegin', review.text);
};

window.addEventListener('load', () => {
  currentId = createRandom();
  addNewContent();
});

prevBtn.addEventListener('click', () => {
  currentId = currentId === FIRST_CONTENT ? LAST_CONTENT : currentId - 1;
  resetReview();
  addNewContent();
});

nextBtn.addEventListener('click', () => {
  currentId = currentId === LAST_CONTENT ? FIRST_CONTENT : currentId + 1;
  resetReview();
  addNewContent();
});

randomBtn.addEventListener('click', () => {
  let nextId = createRandom();
  while (nextId === currentId) nextId = createRandom();
  currentId = nextId;
  resetReview();
  addNewContent();
});
