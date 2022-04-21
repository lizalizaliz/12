(function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
  });
})();

(function () {
  const nav = document.querySelectorAll(".header-nav__link");
  for (let i = 0; i < nav.length; i++) {
    nav[i].addEventListener("click", () => {
        document.querySelector(".header__burger").classList.toggle("active");
        document.querySelector(".header__menu").classList.toggle("active");
        document.querySelector("body").classList.toggle("lock");
      });
  }
})();



(function() {
    const images = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider__container').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = width + 'px';
        images[i].style.height = 'auto';
    }
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider__button-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider__button-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.left = '-' + count * width + 'px';
}
}())