const inputs = document.getElementById("inputs");
const printElem = document.getElementById("printElem");
const startBtn = document.getElementById("startBtn");
const endText = document.querySelector(".end");
const time = [0, 0, 0, 0];
const count = 0;

const printData = () => {
  printElem.innerText = `${time[0]}일 ${time[1]}시간 ${time[2]}분 ${time[3]}초`;
};

const saveData = (e) => {
  if (e.target.id === "day") {
    time[0] = Number(e.target.value);
  } else if (e.target.id === "hour") {
    time[1] = Number(e.target.value);
  } else if (e.target.id === "minute") {
    time[2] = Number(e.target.value);
  } else if (e.target.id === "second") {
    time[3] = Number(e.target.value);
  }
  printData();
};

const initTimer = () => {
  const inputList = inputs.childNodes;
  for (let input in inputList) {
    if (inputList[input].nodeName === "INPUT") {
      inputList[input].value = null;
    }
  }
  endText.style.display = "none";
};

const endTimer = () => {
  endText.style.display = "block";
};

const startTimer = () => {
  initTimer();
  const reduceTimer = setInterval(() => {
    if (time[0] === 0 && time[1] === 0 && time[2] === 0 && time[3] === 0) {
      clearInterval(reduceTimer);
      endTimer();
    } else {
      time[3] -= 1;
      if (time[3] === -1) {
        time[2] -= 1;
        time[3] = 59;
      }
      if (time[2] === -1) {
        time[2] = 59;
        time[1] -= 1;
      }
      if (time[1] === -1) {
        time[1] = 23;
        time[0] -= 1;
      }
    }

    printData();
  }, 1000);
};

inputs.addEventListener("change", saveData);
startBtn.addEventListener("click", startTimer);
