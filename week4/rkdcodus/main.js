const menuIcon = document.querySelector(".menuIcon");

const nav = document.querySelector(".nav");

const dropDown = (e) => {
  nav.classList.toggle("toggle");
};

const removeMenuBar = (e) => {
  if (e.target.nodeName === "BODY") {
    nav.classList.remove("toggle");
  }
};

menuIcon.addEventListener("click", dropDown);
window.addEventListener("mousemove", removeMenuBar);
