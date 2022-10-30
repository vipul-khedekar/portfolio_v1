//---------ELEMENTS SELECTION---------
const navMenu = document.querySelector(`[data-nav-menu]`);
const navToggle = document.querySelector(`[data-nav-toggle]`);
const navClose = document.querySelector(`[data-nav-close]`);
const navLink = document.querySelectorAll(`[data-nav-link]`);
const sliderWrapper = document.querySelector(`[data-slider-wrapper]`);
const sliderSlides = document.querySelectorAll(`[data-slider-slides]`);
const sliderPrev = document.querySelector(`[data-slider-prev]`);
const sliderNext = document.querySelector(`[data-slider-next]`);
const specializationModalOpen = document.querySelectorAll(
  `[data-specialization-modal-open]`
);
const specializationModalClose = document.querySelectorAll(
  `[data-specialization-modal-close]`
);
const specializationModals = document.querySelectorAll(
  `[data-specialization-modal]`
);
const scrollUp = document.querySelector(`[data-scrollup]`);

//---------MENU TOGGLE - MOBILE VIEW---------
//***queried elements are first validated to avoid undefined/blank
//open menu
if (navToggle) {
  navToggle.addEventListener(`click`, () => {
    navMenu.classList.add(`show-menu`);
  });
}

//close menu
if (navClose) {
  navClose.addEventListener(`click`, () => {
    navMenu.classList.remove(`show-menu`);
  });
}

//close menu after link selection
if (navLink.length) {
  navLink.forEach((link) => {
    link.addEventListener(`click`, () => {
      navMenu.classList.remove(`show-menu`);
    });
  });
}

//---------PORTFOLIO SLIDER---------
//hold slide's index
let counter = 0;
//amount for width to shift
const size = sliderSlides[0].clientWidth;

//previous slide
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

//next slide
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

//---------SPECIALIZATION MODAL CONTROLS---------
//open modal
if (specializationModalOpen) {
  specializationModalOpen.forEach((button, i) => {
    button.addEventListener(`click`, () => {
      specializationModals[i].classList.remove(
        `specialization__modal-inactive`
      );
      specializationModals[i].classList.add(`specialization__modal-active`);
    });
  });
}

//close modal
if (specializationModalClose) {
  specializationModalClose.forEach((button, i) => {
    button.addEventListener(`click`, () => {
      specializationModals[i].classList.remove(`specialization__modal-active`);
      specializationModals[i].classList.add(`specialization__modal-inactive`);
    });
  });
}

//---------HIDE SCROLL TO TOP---------
function scrolling() {
  //if scroll position is higher than 560vh
  if (this.scrollY >= 560) {
    scrollUp.classList.add(`show-scroll`);
  } else {
    scrollUp.classList.remove(`show-scroll`);
  }
}

window.addEventListener(`scroll`, scrolling);
