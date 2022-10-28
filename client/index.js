//ELEMENT SELECTION
const navMenu = document.querySelector(`[data-nav-menu]`);
const navToggle = document.querySelector(`[data-nav-toggle]`);
const navClose = document.querySelector(`[data-nav-close]`);
const navLink = document.querySelectorAll(`[data-nav-link]`);

//MENU TOGGLE - MOBILE VIEW
//queried elements are first validated to avoid undefined/blank
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

//CLOSE MENU WHEN A LINK IS CLICKED - MOBILE VIEW
if (navLink.length) {
  navLink.forEach((link) => {
    link.addEventListener(`click`, () => {
      navMenu.classList.remove(`show-menu`);
    });
  });
}
