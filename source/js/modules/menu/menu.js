import {ScrollLock} from '../../utils/scroll-lock';

const _scrollLock = new ScrollLock();

const menuBtn = document.querySelector('.menu__button');
const menu = document.querySelector('.header__container');
const menuOverlay = document.querySelector('.header__overlay');

const closeMenu = () => {
  menuOverlay.addEventListener('click', () => {
    menu.classList.remove('_active');
    menuOverlay.classList.remove('_active');
    _scrollLock.enableScrolling();
  });
};

const initBurger = () => {


  menuBtn.addEventListener('click', (elem) => {
    elem.preventDefault();

    if (!menu.classList.contains('_active')) {
      menu.classList.add('_active');
      menuOverlay.classList.add('_active');
      _scrollLock.disableScrolling();
    } else {
      menu.classList.remove('_active');
      menuOverlay.classList.remove('_active');
      _scrollLock.enableScrolling();
    }
  });

  closeMenu();


  // menuBtn.addEventListener('click', function () {
  //   menuBtn.classList.toggle('_active');
  //   menu.classList.toggle('_active');
  //   menuOverlay.classList.toggle('_active');
  // });
};
export {initBurger};
