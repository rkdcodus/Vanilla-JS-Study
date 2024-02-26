const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const xmark = document.querySelector('.xmark');

const closeSidebar = (e) => {
  if (!sidebar.contains(e.target) && !menu.contains(e.target)) {
    sidebar.classList.remove('sidebarShow')
  }
}

document.addEventListener('mousedown', closeSidebar)

menu.addEventListener('click', () => {
  sidebar.classList.toggle('sidebarShow');
});

xmark.addEventListener('click', () => {
  sidebar.classList.remove('sidebarShow')
})
