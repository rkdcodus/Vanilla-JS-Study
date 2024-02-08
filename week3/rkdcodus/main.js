const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://i.pinimg.com/236x/82/19/e9/8219e955fd50a0eb26959d17f4b173c7.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi odit ducimus, praesentium sed suscipit tempora, autem est quaerat nisi dolorem aperiam dolores nobis reiciendis? Animi quia veritatis aperiam perferendis.",
  },
  {
    id: 2,
    name: "anna smith",
    job: "web designer",
    img: "https://i.pinimg.com/564x/71/48/c9/7148c9737ab02a98e4c1ab22ead080a5.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi odit ducimus, praesentium sed suscipit tempora, autem est quaerat nisi dolorem aperiam dolores nobis reiciendis? ",
  },
  {
    id: 3,
    name: "Danish smith",
    job: "frontend",
    img: "https://i.pinimg.com/564x/63/31/18/633118d76f56a929855799e84bfd723e.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi odit ducimus, praesentium sed suscipit tempora, autem est quaerat nisi dolorem aperiam dolores nobis reiciendis? danish",
  },
  {
    id: 4,
    name: "any person",
    job: "any job",
    img: "https://i.pinimg.com/564x/d0/e6/00/d0e60042f48bee3d1839ce86acbf67be.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eligendi odit ducimus ",
  },
];
const btns = document.getElementById("btn-container");
const img = document.getElementById("img");
const reviewName = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("text");

let currentReview = 0;

const prev = () => {
  currentReview -= 1;
  if (currentReview < 0) currentReview = 0;
  show();
};

const next = () => {
  currentReview += 1;
  if (currentReview > reviews.length - 1) currentReview = reviews.length - 1;
  show();
};

const random = () => {
  currentReview = createRandom();
  show();
};

const createRandom = () => {
  let random = currentReview;
  while (random === currentReview) {
    random = Math.floor(Math.random() * reviews.length);
  }

  return random;
};

const show = () => {
  const review = reviews[currentReview];
  img.src = review.img;
  reviewName.innerText = review.name;
  job.innerText = review.job;
  text.innerText = review.text;
};

const clickHandle = (e) => {
  if (e.target.id === "prev") prev();
  if (e.target.id === "next") next();
  if (e.target.id === "random") random();
};

window.addEventListener("DOMContentLoaded", show());
btns.addEventListener("click", clickHandle);
