//click на стрелки
let sliderArrowPrev = document.querySelector(".slider__arrow_prev");
let sliderArrowNext = document.querySelector(".slider__arrow_next");
sliderArrowPrev.onclick = prevSlide;
sliderArrowNext.onclick = nextSlide;

//
let sliderItem = Array.from(document.getElementsByClassName('slider__item'));
let sliderItemActive = document.querySelector('slider__item_active');

let sliderItemLength = sliderItem.length;
let slideIndex = 0;




function nextSlide() {
    for (let i = 0; i < sliderItemLength; i++) {
        sliderItem[i].classList.remove('slider__item_active');
    }

    if (slideIndex > sliderItemLength) {
        slideIndex = 0;
    } else { slideIndex += 1 }


    sliderItem[slideIndex + 1].classList.add("slider__item_active");
    console.log(slideIndex);
}

function prevSlide() {
    for (let i = 0; i < sliderItemLength; i++) {
        sliderItem[i].classList.remove('slider__item_active');
    }

    slideIndex -= 1;
    if (slideIndex < 0) {
        slideIndex = sliderItemLength;
    }

    sliderItem[slideIndex - 1].classList.add("slider__item_active");
}