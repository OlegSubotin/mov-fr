const openBtnEl = document.querySelector(".js-mobile-menu-toggle");
const closeBtnEl = document.querySelector(".js-mobile-menu-close");
const menuEl = document.querySelector(".js-mobile-menu");

openBtnEl.addEventListener("click", toggleMenu);
closeBtnEl.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuEl.classList.toggle("is-hidden");
}
