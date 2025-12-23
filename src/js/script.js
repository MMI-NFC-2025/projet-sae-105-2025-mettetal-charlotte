/*Carousel*/

const carousel = document.querySelector(".carousel__track");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {
    const scrollByAmount = () => {
        const slide = document.querySelector('.carousel__slide');
        return slide ? slide.clientWidth : carousel.offsetWidth || 260;
    };

    if (prevButton) {
        prevButton.addEventListener("click", () => {
            carousel.scrollBy({
                left: -scrollByAmount(),
                behavior: "smooth",
            });
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            carousel.scrollBy({
                left: scrollByAmount(),
                behavior: "smooth",
            });
        });
    }
}
const premiereImage = document.querySelector(".carousel__slide");
const scrollAmount = premiereImage ? premiereImage.clientWidth : 260;

/*Menu*/

const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
const logo = document.querySelector('.header__logo');
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        const isClosed = !isOpen;

        toggle.setAttribute('aria-expanded', String(isClosed));
        nav.hidden = isOpen;
        if (logo) logo.classList.toggle('header__logo--extend', isClosed);
        page.classList.toggle('u-noscroll', isClosed);
    });
}