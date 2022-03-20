/* СКРИПТ СЛАЙДЕРА */
"use strict"
const slider = document.querySelector('.provide-slider')
const sliderBtn = document.querySelector('.provide-btn');
const sliderLine = document.querySelector('.provide-slider__line');
const sliderBlock = document.querySelectorAll('.slider-provide');
let sliderBlockWidth;
let offSet = 0;
let offWidth = 0;


// Задаём начальную ширину слайдера
slider.style.width = 896 + 'px'

// Определение ширины линии слайдера, в зависимости от количества элементов (при загрузке страницы)
document.addEventListener("DOMContentLoaded", ()=>{
    sliderBlockWidth = slider.clientWidth
    sliderLine.style.width = sliderBlockWidth * sliderBlock.length + 'px';
    offWidth = sliderLine.style.width;
});


// Определение ширины линии слайдера, в зависимости от количества элементов (при изменении ширины экрана)
window.addEventListener('resize', ()=>{
    sliderBlockWidth = slider.clientWidth
    sliderLine.style.width = sliderBlockWidth * sliderBlock.length + 'px';
    offWidth = sliderLine.style.width;

    console.log(slider.clientWidth)
})

// События
sliderBtn.addEventListener('click', rightBtn);



// Функции
function rightBtn(event){
    offSet += -sliderBlockWidth;
    if(offSet < -(parseInt(offWidth) - sliderBlockWidth)){
        offSet = 0;
    }
    sliderLine.style.left = offSet + 'px';
}

