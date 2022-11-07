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
const themeButton = document.querySelector(`[data-theme-button]`);
const body = document.querySelector(`body`);
const inputName = document.querySelector(`[data-input-name]`);
const inputEmail = document.querySelector(`[data-input-email]`);
const inputMessage = document.querySelector(`[data-input-message]`);
const formSubmit = document.querySelector(`[data-form-submit]`);

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

//---------THEME SELECTION---------
const darkTheme = `dark-theme`;
const lightIcon = `uil-sun`;

const selectedTheme = localStorage.getItem(`selected-theme`);
const selectedIcon = localStorage.getItem(`selected-icon`);

//look for current theme, by if body has class of dark
function getCurrentTheme() {
  if (body.classList.contains(darkTheme)) {
    `dark`;
  } else {
    `light`;
  }
}

//look for current icon, by which class exists
function getCurrentIcon() {
  if (themeButton.classList.contains(lightIcon)) {
    `uil-moon`;
  } else {
    `uil-sun`;
  }
}

//if any theme is selected
if (selectedTheme) {
  body.classList[selectedTheme === `dark` ? `add` : `remove`](darkTheme);
  themeButton.classList[selectedIcon === `uil-moon` ? `add` : `remove`](
    lightIcon
  );
}

//manually selected/toggle theme
themeButton.addEventListener(`click`, () => {
  body.classList.toggle(darkTheme);
  themeButton.classList.toggle(lightIcon);

  localStorage.setItem(`selected-theme`, getCurrentTheme());
  localStorage.setItem(`selected-icon`, getCurrentIcon());
});

//contact form submit
async function submitContacts() {
  const nameValue = inputName.value;
  const emailValue = inputEmail.value;
  const messageValue = inputMessage.value;
  const fetchConfig = {
    method: "POST",
    body: JSON.stringify({
      data: { name: nameValue, email: emailValue, message: messageValue },
    }),
  };

  fetch(
    `https://api.apispreadsheets.com/data/uo6VKPEoXIPfdFrO/`,
    fetchConfig
  ).then((response) => {
    if (response.status === 201) {
      console.log(`success`);
    } else {
      console.log(`fail`);
    }
  });
}

formSubmit.addEventListener(`click`, (e) => {
  e.preventDefault();
  submitContacts();
});
