/* СКРИПТ FIXED-MENU */

"use strict"

let header = document.querySelector('.header');

document.addEventListener('scroll', ()=>{
    console.log(window.scrollY)

    if(window.scrollY > 120){
        header.style.position = 'fixed';
        header.style.zIndex = '9999';
        header.style.width = '100%';
        header.style.background = 'white';
        header.classList.add('header-pseudo');
    }else{
        header.style.position = 'relative'
        header.style.zIndex = '9999';
        header.style.maxWidth = '100%';
        header.style.background = '0';
        header.classList.remove('header-pseudo');
    }
})
