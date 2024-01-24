const clickBtn = document.querySelector(".click");
const colorCode = document.querySelector(".color-code");
const color = document.querySelector("body");
const optionSimple = document.querySelector(".simple");
const optionHex = document.querySelector(".hex");
let prevColor = colorCode;
let option = "simple";

const simple = ["#ff0000", "#ff6b00", "#ffe500", "#00f50a", "#00acf5", "#cc00ff", "#ff00bb"];
const hex = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//random 수 만드는 함수
const randomNumber = () => {
  if (option === "simple") {
    return Math.floor(Math.random() * simple.length); // 0~6 랜덤 수 생성
  } else {
    return Math.floor(Math.random() * hex.length);
  }
};

// 색상 바꾸는 함수
const changeBackground = () => {
  if (option === "simple") {
    let newColor = simple[randomNumber()];
    while (newColor === prevColor) {
      newColor = simple[randomNumber()];
    }
    colorCode.textContent = newColor;
    color.style.backgroundColor = newColor;
    prevColor = newColor;
  } else {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += hex[randomNumber()];
    }
    colorCode.textContent = newColor;
    color.style.backgroundColor = newColor;
    prevColor = newColor;
  }
};

const changeOption = (e) => {
  option = e.target.textContent;
  if (option === "simple") {
    optionSimple.style.color = "#000000";
    optionHex.style.color = "#AFAFAF";
  } else {
    optionSimple.style.color = "#AFAFAF";
    optionHex.style.color = "#000000";
  }
};

clickBtn.addEventListener("click", changeBackground);
optionSimple.addEventListener("click", changeOption);
optionHex.addEventListener("click", changeOption);
