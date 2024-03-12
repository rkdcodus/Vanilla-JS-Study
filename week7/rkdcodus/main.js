const container = document.getElementById("container");
const boxs = document.querySelectorAll(".box");
const icons = document.querySelectorAll(".fa-regular");
const minus = "fa-square-minus";
const plus = "fa-square-plus";

const controlIcon = (target) => {
  icons.forEach((icon) => {
    if (target !== icon && icon.classList.contains(minus)) {
      icon.classList.remove(minus);
      icon.classList.add(plus);
    }
  });
  if (target.classList.contains(plus)) {
    target.classList.remove(plus);
    target.classList.add(minus);
  } else if (target.classList.contains(minus)) {
    target.classList.remove(minus);
    target.classList.add(plus);
  }
};

const controlBox = (target) => {
  boxs.forEach((box) => {
    if (target !== box && box.classList.contains("open")) {
      box.classList.remove("open");
    }
  });

  target.classList.toggle("open");
};

const toggle = (e) => {
  const targetBox = e.target.closest(".box");
  const targetIcon = e.target;
  if (targetIcon.classList.contains("fa-regular")) {
    controlIcon(targetIcon);
    controlBox(targetBox);
  }
};

container.addEventListener("click", toggle);
