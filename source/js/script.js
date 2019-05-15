var toggleBtn = document.querySelector(".main-navigation__toggle");
var mainNavMenu = document.querySelector(".main-navigation__list");
var header = document.querySelector(".header");
var mainNav = document.querySelector(".main-navigation");
var burgerIcon = document.querySelector(".main-navigation__toggle-icon--burger");
var crossIcon = document.querySelector(".main-navigation__toggle-icon--cross");

toggleBtn.classList.remove("main-navigation__toggle--no-js");
toggleBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNavMenu.classList.toggle("main-navigation__list--close");
  header.classList.toggle("header--close");
  mainNav.classList.toggle("main-navigation--close");
  burgerIcon.classList.toggle("main-navigation__toggle-icon--close");
  crossIcon.classList.toggle("main-navigation__toggle-icon--close");
});
