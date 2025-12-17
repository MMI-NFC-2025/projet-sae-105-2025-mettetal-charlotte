/*Carousel*/

const carousel = document.querySelector(".carousel__track");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel){
    prevButton.addEventListener("click", () =>{
        carousel.scrollBy({
            left: -carousel.offsetWidth,
            behavior: "smooth",
        });
    });

    nextButton.addEventListener("click," () =>{
        carousel.scrollBy({
            left: carousel.offsetWidth,
            behavior: "smooth",
        });
    });
}
const premiereImage = document.querySelector(".carousel__slide");
const scrollAmount = premiereImage ? premiereImage.clientWidth : 260;
