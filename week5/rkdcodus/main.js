const menuIcon = document.querySelector(".menuIcon");
const sideBar = document.querySelector(".sideContainer");
const close = document.getElementById("close");

const toggleSideBar = () => {
  sideBar.classList.toggle("hide");
};

const closeSideBar = () => {
  sideBar.classList.add("hide");
};

menuIcon.addEventListener("click", toggleSideBar);
close.addEventListener("click", closeSideBar);
