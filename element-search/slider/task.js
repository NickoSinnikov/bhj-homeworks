//click на стрелки
let sliderArrowPrev = document.querySelector(".slider__arrow_prev");
let sliderArrowNext = document.querySelector(".slider__arrow_next");
sliderArrowPrev.onclick = prevSlide;
sliderArrowNext.onclick = nextSlide;


let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let sliderItemLength = sliderItem.length;


let dotIndex = 0;
let dot = Array.from(document.querySelectorAll(".slider__dot"));


for (let i = 0; i < dot.length; i++) {
    dot[i].onclick = function() {
        let dotIndex = dot.indexOf(dot[i]);

        let dotItemActive = document.querySelector(".slider__dot_active");
        dotItemActive.classList.remove("slider__dot_active");

        let sliderItemActive = document.querySelector('.slider__item_active');
        sliderItemActive.className = "slider__item";

        sliderItem[dotIndex].classList.add("slider__item_active");
        dot[dotIndex].classList.add('slider__dot_active')
    };
};


let slideIndex = sliderItem.findIndex((arr) => arr.className.includes('slider__item_active'));
dot[slideIndex].classList.add('slider__dot_active'); // делаем активную точку в соответствии с первым сдайдом

function nextSlide() {
    let sliderItemActive = document.querySelector('.slider__item_active'); // находим активный элемент слайда
    let dotItemActive = document.querySelector(".slider__dot_active"); // находим активный элемент точки

    slideIndex = sliderItem.findIndex((arr) => arr.className.includes('slider__item_active')); // находим индекс активного элемента в массиве


    if (slideIndex === (sliderItemLength - 1)) {
        slideIndex = 0;
    } else { slideIndex += 1 }

    sliderItemActive.className = "slider__item";
    dotItemActive.classList.remove("slider__dot_active");

    sliderItem[slideIndex].classList.add("slider__item_active");
    dot[slideIndex].classList.add('slider__dot_active')

}

function prevSlide() {

    let sliderItemActive = document.querySelector('.slider__item_active'); // находим активный элемент
    let dotItemActive = document.querySelector(".slider__dot_active")

    slideIndex = sliderItem.findIndex((arr) => arr.className.includes('slider__item_active')); // находим индекс активного элемента в массиве

    // проверяем, если элемент самый первый, то след активный элемент будет последним
    if (slideIndex === 0) {
        slideIndex = sliderItemLength - 1;
    } else { slideIndex -= 1 }

    sliderItemActive.className = "slider__item";
    dotItemActive.classList.remove("slider__dot_active");

    sliderItem[slideIndex].classList.add("slider__item_active");
    dot[slideIndex].classList.add('slider__dot_active')

}