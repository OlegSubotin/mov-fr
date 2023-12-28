const openBtnEl = document.querySelector(".js-burger-button");
const closeBtnEl = document.querySelector(".js-cross-button");
const menuEl = document.querySelector(".js-mobile-menu");

openBtnEl.addEventListener("click", toggleMenu);
closeBtnEl.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuEl.classList.toggle("is-hidden");
}
