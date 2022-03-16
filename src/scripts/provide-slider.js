/* СКРИПТ СЛАЙДЕРА */
"use strict"
const sliderBtn = document.querySelector('.provide-btn');
const sliderLine = document.querySelector('.provide-slider__line');
const sliderBlock = document.querySelectorAll('.slider-provide');
const sliderBlockWidth = 896;
let offSet = 0;
let offWidth = 0;


// События
sliderBtn.addEventListener('click', rightBtn);

// Определение ширины линии слайдера, в зависимости от количества элементов
sliderLine.style.width = sliderBlockWidth * sliderBlock.length + 'px';
offWidth = sliderLine.style.width;


// Функции
function rightBtn(event){
    offSet += -sliderBlockWidth;
    if(offSet < -(parseInt(offWidth) - sliderBlockWidth)){
        offSet = 0;
    }
    sliderLine.style.left = offSet + 'px';
    console.log(offSet, offWidth, (parseInt(offWidth) - sliderBlockWidth))
}