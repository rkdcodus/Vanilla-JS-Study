const modalButtom = document.getElementById("modalButton");
const closeButtom = document.getElementById("closeButton");
const modal = document.querySelector(".modalBackground");

const openModal = () => {
  modal.classList.remove("hide");
};

const closeModal = () => {
  modal.classList.add("hide");
};

modalButtom.addEventListener("click", openModal);
closeButtom.addEventListener("click", closeModal);
