let navHeader = document.querySelector('.header__nav');
let navToggle = document.querySelector('.nav__toggle');

navHeader.classList.add('header__nav--closed');
navHeader.classList.remove('header__nav--opened');

navToggle.onclick = function () {
  navHeader.classList.toggle('header__nav--opened');
  navHeader.classList.toggle('header__nav--closed');
}
