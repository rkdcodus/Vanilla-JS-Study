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
let translateValue = 0;
let center = 0;
let autoDireaction = true;
let autoSlide = false;

const nextSlide = () => {
  center -= 1;
  if (-center > datas.length - 1) center = -(datas.length - 1);
  translateValue = center * 100;
  image.style.transform = `translate(${translateValue}vw)`;
};

const prevSlide = () => {
  center += 1;
  if (center > 0) center = 0;
  translateValue = center * 100;
  image.style.transform = `translate(${translateValue}vw)`;
};

const createImage = () => {
  datas.map((data) => {
    image.insertAdjacentHTML(
      "beforeend",
      `<img class="image" src='${data.url}' draggable="false"></img>`
    );
  });
};

window.addEventListener("DOMContentLoaded", createImage);
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// 자동 슬라이드 기능 구현
setInterval(() => {
  if (document.fullscreenElement && autoSlide) {
    if (center === 0) {
      autoDireaction = true;
    } else if (-center === datas.length - 1) {
      autoDireaction = false;
    }

    if (autoDireaction) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}, 7000);

// 전체화면 기능

const detectMouseMove = (e) => {
  mouse.x = e.screenX;
  mouse.y = e.screenY;
  buttons.classList.remove("hide");
  image.style.cursor = "default";

  setTimeout(() => {
    if (mouse.x === e.screenX && mouse.y === e.screenY && document.fullscreenElement) {
      buttons.classList.add("hide");
      image.style.cursor = "none";
      autoSlide = true;
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
    document.exitFullscreen();
  }
};

screen.addEventListener("click", toggleFullScreen);

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    image.removeEventListener("mousemove", detectMouseMove);
    screen.replaceChildren();
    screen.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-expand">');
    buttons.classList.remove("hide");
    image.style.cursor = "default";
    autoSlide = false;
  }
});

// 마우스 슬라이드 기능

let startX = 0;
let prevX = 0;

const dragImage = (e) => {
  translateValue += e.offsetX - prevX;
  prevX = e.offsetX;
  image.style.transform = `translate(${translateValue}vw)`;
};

image.addEventListener("mousedown", (e) => {
  startX = e.offsetX;
  prevX = e.offsetX;
  image.addEventListener("mousemove", dragImage);
});

image.addEventListener("mouseup", (e) => {
  image.removeEventListener("mousemove", dragImage);
  const movingX = startX - e.offsetX; // 움직인 거리

  if (Math.abs(movingX) < 50) {
    image.style.transform = `translate(${center * 100}vw)`;
    return;
  }

  if (movingX > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
});
