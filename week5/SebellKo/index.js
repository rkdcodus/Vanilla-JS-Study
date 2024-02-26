const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const sidebarCloseButton = document.getElementById('sidebarCloseButton');

let show = false;

const toggleSidebar = () => {
  sidebar.style.transform = show ? 'translate(-100%)' : 'translate(0)';
  show = !show;
};

sidebarToggle.addEventListener('click', toggleSidebar);
sidebarCloseButton.addEventListener('click', toggleSidebar);
