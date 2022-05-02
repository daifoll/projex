/* TOUCH SLIDER */
"use strict"
// Константы
const slider = document.querySelector('.clients-slider');
const sliderLine = document.querySelector('.clients-slider__line')
let sliderGrab = false;

// События
slider.addEventListener('mousedown', (event)=>{
    sliderGrab = true;
    slider.style.cursor = 'grabbing'

})

slider.addEventListener('mouseup', (event)=>{
    sliderGrab = false;
    slider.style.cursor = 'grab'
})

slider.addEventListener('mouseleave', (event)=>{
    sliderGrab = false;
    slider.style.cursor = 'grab'
})

slider.addEventListener('mousemove',(event)=>{
    if(sliderGrab){
        slider.scrollLeft -= event.movementX
    }
})
