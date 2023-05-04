let navMain = document.querySelector('.header-nav');
let navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('header-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header-nav--closed') && navToggle.classList.contains('nav__toggle--burger')) {
    navMain.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--opened');
    navToggle.classList.remove('nav__toggle--burger');
    navToggle.classList.add('nav__toggle--cross');
  } else {
    navMain.classList.add('header-nav--closed');
    navMain.classList.remove('header-nav--opened');
    navToggle.classList.add('nav__toggle--burger');
    navToggle.classList.remove('nav__toggle--cross');
  }
});
