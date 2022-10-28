const navMenu = document.querySelector(`[data-nav-menu]`);
const navToggle = document.querySelector(`[data-nav-toggle]`);
const navClose = document.querySelector(`[data-nav-close]`);

//MENU TOGGLE FOR MOBILE VIEW
//Queried elements are first validated to avoid undefined/blank
if (navToggle) {
  navToggle.addEventListener(`click`, () => {
    navMenu.classList.add(`show-menu`);
  });
}

if (navClose) {
  navClose.addEventListener(`click`, () => {
    navMenu.classList.remove(`show-menu`);
  });
}
