const inputs = document.getElementById("inputs");
const printElem = document.getElementById("printElem");
const time = [0, 0, 0, 0];

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

inputs.addEventListener("change", saveData);
