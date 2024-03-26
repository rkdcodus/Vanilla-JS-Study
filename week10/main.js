const nav = document.querySelector(".nav");
const section1 = document.querySelector(".section1").offsetTop;
const section2 = document.querySelector(".section2").offsetTop;
const section3 = document.querySelector(".section3").offsetTop;
const section4 = document.querySelector(".section4").offsetTop;
const button = document.getElementById("mainButton");
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menu-close");

const scrollEvent = (top) => {
  window.scrollTo({ top: top, behavior: "smooth" });
  nav.classList.remove("open");
};

const clickHandle = (e) => {
  if (e.target.id === "home") scrollEvent(section1);
  else if (e.target.id === "about") scrollEvent(section2);
  else if (e.target.id === "product") scrollEvent(section3);
  else if (e.target.id === "contactUs") scrollEvent(section4);
};

button.addEventListener("click", () => {
  scrollEvent(section4);
});
menu.addEventListener("click", () => {
  nav.classList.add("open");
});
menuClose.addEventListener("click", () => {
  nav.classList.remove("open");
});
nav.addEventListener("click", clickHandle);
