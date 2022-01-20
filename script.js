const BURGER_BTN = document.querySelector(".burger_btn");
const MENU = document.querySelector(".menu");


function clickHandler() {
  BURGER_BTN.classList.toggle('active');
  MENU.classList.toggle('active');
}

BURGER_BTN.addEventListener("click", clickHandler);
