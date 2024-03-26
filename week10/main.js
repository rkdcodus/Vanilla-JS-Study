const nav = document.getElementById("nav");
const section1 = document.querySelector(".section1").offsetTop;
const section2 = document.querySelector(".section2").offsetTop;
const section3 = document.querySelector(".section3").offsetTop;
const section4 = document.querySelector(".section4").offsetTop;
const button = document.getElementById("mainButton");

const clickHandle = (e) => {
  if (e.target.id === "home") {
    window.scrollTo({ top: section1, behavior: "smooth" });
  } else if (e.target.id === "about") {
    window.scrollTo({ top: section2, behavior: "smooth" });
  } else if (e.target.id === "product") {
    window.scrollTo({ top: section3, behavior: "smooth" });
  } else if (e.target.id === "contactUs") {
    window.scrollTo({ top: section4, behavior: "smooth" });
  }
};

nav.addEventListener("click", clickHandle);
button.addEventListener("click", () => {
  window.scrollTo({ top: section4, behavior: "smooth" });
});
