var toggleBtn = document.querySelector(".main-navigation__toggle");
var mainNavMenu = document.querySelector(".main-navigation__list");
var header = document.querySelector(".header");
var mainNav = document.querySelector(".main-navigation");

toggleBtn.classList.remove("main-navigation__toggle--no-js");
mainNavMenu.classList.remove("main-navigation__list--no-js");
header.classList.remove("header--no-js");
header.classList.remove("header--no-js-small");
mainNav.classList.remove("main-navigation--no-js");

toggleBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  var burgerIcon = toggleBtn.querySelector(".main-navigation__toggle-icon--burger");
  var crossIcon = toggleBtn.querySelector(".main-navigation__toggle-icon--cross");
  var clsb = burgerIcon.getAttribute("class")
  var clsc = crossIcon.getAttribute("class");

  if (clsb.indexOf("--close") !== -1) {
    clsb = clsb.replace("main-navigation__toggle-icon--close", "");
    burgerIcon.setAttribute("class", clsb);
    clsc += " " + "main-navigation__toggle-icon--close";
    crossIcon.setAttribute("class", clsc);
  }
  else if (clsb.indexOf("--close") === -1) {
    clsb += " " + "main-navigation__toggle-icon--close";
    burgerIcon.setAttribute("class", clsb);
    clsc = clsc.replace("main-navigation__toggle-icon--close", "");
    crossIcon.setAttribute("class", clsc);
  }

  mainNavMenu.classList.toggle("main-navigation__list--close");
  header.classList.toggle("header--close");
  mainNav.classList.toggle("main-navigation--close");

});
