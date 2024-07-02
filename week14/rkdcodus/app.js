const input = document.getElementById("input");
const button = document.getElementById("button");
const itemList = [];

button.addEventListener("click", () => {
  itemList.push(input.value);
});
