/* СКРИПТ СПОЙЛЕРОВ */
'use strict'

const accordion = document.querySelector('.accordion-promises');

// События
accordion.addEventListener('click', openAccordion);


// Функции
function openAccordion(event){
    let element = event.target;
    let elementParent = element.parentNode;
    let elementParentChildren = elementParent.children;
    
    if(element.classList.contains('item-accordion__btn')){
        for(let item of elementParentChildren){
            item.classList.contains('item-accordion__text') ? item.classList.toggle('item-accordion__text_active') : item
            item.classList.contains('item-accordion__btn') ? item.classList.toggle('item-accordion__btn_active') : item
            element.textContent == '+' ? element.textContent = '-' : element.textContent = '+';
            
        }
    }

}