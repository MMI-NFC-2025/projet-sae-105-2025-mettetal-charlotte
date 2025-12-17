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