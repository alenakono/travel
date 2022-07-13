const slider = document.querySelector('.slider__wrapper');
const sliderDots = document.querySelectorAll('.navigation__dots');

let sliderPosition = 0;
let dotIndex = 0;


sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        let slideWidth = document.querySelector('.slider__item').offsetWidth;
        sliderPosition = slideWidth * index,
        slider.style.left = -sliderPosition + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        

    });
});

const thisSlide = (index) => {
    for (let dot of sliderDots) {
        dot.classList.remove('navigation__dots_active');
    }
    sliderDots[index].classList.add('navigation__dots_active');
};
