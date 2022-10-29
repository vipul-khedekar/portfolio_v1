//ELEMENT SELECTION
const navMenu = document.querySelector(`[data-nav-menu]`);
const navToggle = document.querySelector(`[data-nav-toggle]`);
const navClose = document.querySelector(`[data-nav-close]`);
const navLink = document.querySelectorAll(`[data-nav-link]`);
const sliderWrapper = document.querySelector(`[data-slider-wrapper]`);
const sliderSlides = document.querySelectorAll(`[data-slider-slides]`);
const sliderPrev = document.querySelector(`[data-slider-prev]`);
const sliderNext = document.querySelector(`[data-slider-next]`);

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

//PORTFOLIO SLIDER
let counter = 0;
const size = sliderSlides[0].clientWidth;

if (sliderPrev) {
  sliderPrev.addEventListener(`click`, () => {
    if (counter <= 0) {
      return;
    }
    sliderWrapper.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    sliderWrapper.style.transform = `translateX(${-size * counter}px)`;
  });
}

if (sliderNext) {
  sliderNext.addEventListener(`click`, () => {
    if (counter >= 3) {
      return;
    }
    sliderWrapper.style.transition = `transform 0.4s ease-in-out`;
    counter++;
    sliderWrapper.style.transform = `translateX(${-size * counter}px)`;
  });
}
