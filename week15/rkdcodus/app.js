const datas = [
  {
    id: 0,
    url: "https://wallpapercave.com/wp/aWaXW72.jpg",
  },
  {
    id: 1,
    url: "https://wallpapercave.com/wp/wp3181476.jpg",
  },
  {
    id: 2,
    url: "https://wallpapercave.com/wp/wp3181484.jpg",
  },
  {
    id: 3,
    url: "https://wallpapercave.com/wp/wp2123889.jpg",
  },
  {
    id: 4,
    url: "https://wallpapercave.com/wp/wp2209011.jpg",
  },
];
const image = document.querySelector(".image_wrap");
const screen = document.getElementById("screen-size");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const buttons = document.querySelector(".button");
let mouse = { x: null, y: null };
let center = 0;

const nextSlide = () => {
  center += 1;
  if (center > datas.length - 1) {
    center = datas.length - 1;
  }
  image.style.transform = `translate(-${center * 100}vw)`;
};

const prevSlide = () => {
  center -= 1;
  if (center < 0) {
    center = 0;
  }
  image.style.transform = `translate(-${center * 100}vw)`;
};

const createImage = () => {
  datas.map((data) => {
    image.insertAdjacentHTML("beforeend", `<img class="image" src='${data.url}'></img>`);
  });
};

const detectMouseMove = (e) => {
  mouse.x = e.screenX;
  mouse.y = e.screenY;
  buttons.classList.remove("hide");
  image.style.cursor = "default";

  setTimeout(() => {
    if (mouse.x === e.screenX && mouse.y === e.screenY) {
      buttons.classList.add("hide");
      image.style.cursor = "none";
    }
  }, 2000);
};

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    screen.replaceChildren();
    screen.insertAdjacentHTML(
      "beforeend",
      '<i class="fa-solid fa-down-left-and-up-right-to-center"></i>'
    );
    image.addEventListener("mousemove", detectMouseMove);
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      screen.replaceChildren();
      screen.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-expand">');
      image.removeEventListener("mousemove", detectMouseMove);
    }
  }
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
screen.addEventListener("click", toggleFullScreen);
window.addEventListener("DOMContentLoaded", createImage);
