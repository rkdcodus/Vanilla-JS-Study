const image = document.querySelector(".image_wrap");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let center = 0;

const next_slide = () => {
  center += 1;
  if (center > 5 - 1) {
    center = 5 - 1;
  }
  image.style.transform = `translate(-${center * 80}vw)`;
};

const prev_slide = () => {
  center -= 1;
  if (center < 0) {
    center = 0;
  }
  image.style.transform = `translate(-${center * 80}vw)`;
};

next.addEventListener("click", next_slide);
prev.addEventListener("click", prev_slide);
