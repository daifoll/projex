/* СКРИПТ СЛАЙДЕРА БЛОКА PROVIDE */
"use strict"
const slider = document.querySelector('.provide-slider')
const sliderBtn = document.querySelector('.provide-btn');
const sliderLine = document.querySelector('.provide-slider__line');
const sliderBlock = document.querySelectorAll('.slider-provide');
let sliderBlockWidth;
let offSet = 0;
let offWidth = 0;
let sliderCount = 0;
let sliderLeftStep = 0;

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

    /* Устанавливаем значение left sliderLine при resize с сохранением положения текущего слайда */
    if(sliderCount > 0){
        sliderLine.style.left = -(Number(sliderLine.style.width.split('px')[0]) / sliderBlock.length) * sliderCount + 'px';
    }else if(sliderCount == sliderBlock.length - 1){
        sliderCount = 0;
    }
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
    

    /*
        Присваиваем переменной sliderCount значение текущего слайдера (отсчёт начинается с 0) 
        для дальнейшей корректировки положения этого слайдера при resize
    */
    if(sliderCount == sliderBlock.length - 1){
        sliderCount = 0;
    }else{
        sliderCount++
    }

}



