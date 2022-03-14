"use strict"
const sliderBtn = document.querySelector('.provide-btn');
const sliderLine = document.querySelector('.provide-slider__line');
const sliderBlock = document.querySelectorAll('.slider-provide');
const sliderBlockWidth = 896;
let offSet = 0;
let offWidth = 0;
sliderBtn.addEventListener('click', rightBtn);

sliderLine.style.width = sliderBlockWidth * sliderBlock.length + 'px';
offWidth = sliderLine.style.width;

function rightBtn(event){
    offSet += -896;
    if(offSet < -(parseInt(offWidth) - 896)){
        offSet = 0;
    }
    sliderLine.style.left = offSet + 'px';
    console.log(offSet, offWidth, (parseInt(offWidth) - 896))
}