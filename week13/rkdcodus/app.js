import data from "./data.js";

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const loremBox = document.getElementById("lorem-text");

const generator = (e) => {
  // submit 후 서버로 전송되면서 새로고침되는 기본 동작 제거
  e.preventDefault();

  // 문단 생성 공간 초기화
  loremBox.replaceChildren();

  // 문단 수만큼 생성
  for (let i = 0; i < Number(amount.value); i++) {
    const randomNumber = Math.floor(Math.random() * 9);
    loremBox.insertAdjacentHTML("beforeend", `<p>${data[randomNumber]}</p>`);
  }
};

form.addEventListener("submit", generator);
