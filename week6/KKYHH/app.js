const banner = document.querySelector('.banner')
const modal = document.querySelector('.modal')
const bannerBtn = document.querySelector('.banner-btn')
const modalBtn = document.querySelector('.modal-btn')

modal.classList.add('modal-show')

bannerBtn.addEventListener('click', () => {
  modal.classList.remove('modal-show')

})

modalBtn.addEventListener('click', () => {
  modal.classList.add('modal-show')
})

const closeModal = (e) => {
  if (!modal.contains(e.target)) {
    modal.classList.add('modal-show')
  }
}

document.addEventListener('mousedown', closeModal)