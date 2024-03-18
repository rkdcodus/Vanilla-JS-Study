import axios from 'axios/dist/esm/axios.min.js';
import insertMenu from './modules/insertMenu.js';

const categoryButtons = document.querySelectorAll('nav ul li');
const menuList = document.querySelector('main');

const menus = await axios.get('./menu.json').then((result) => result.data);
const Breakfast = menus.filter((menu) => menu.type === 'Breakfast');
const Lunch = menus.filter((menu) => menu.type === 'Lunch');
const Shakes = menus.filter((menu) => menu.type === 'Shakes');
const Dinner = menus.filter((menu) => menu.type === 'Dinner');

insertMenu(menus, menuList);

categoryButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const type = event.target.getAttribute('id');
    if (type === 'All') insertMenu(menus, menuList);
    if (type === 'Breakfast') insertMenu(Breakfast, menuList);
    if (type === 'Lunch') insertMenu(Lunch, menuList);
    if (type === 'Shakes') insertMenu(Shakes, menuList);
    if (type === 'Dinner') insertMenu(Dinner, menuList);
  });
});
