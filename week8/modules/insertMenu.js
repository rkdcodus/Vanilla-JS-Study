import createMenuItem from './createMenuItem.js';

const insertMenu = (menuType, container) => {
  container.replaceChildren();
  container.insertAdjacentHTML(
    'afterbegin',
    menuType.reduce((acc, cur) => {
      acc += createMenuItem(cur.menu, cur.price, cur.description, cur.src);
      return acc;
    }, ``)
  );
};

export default insertMenu;
