/* СКРИПТ БУРГЕР-МЕНЮ */
"use strict"

const navigation = document.querySelector('.navigation');
const navigationBtn = document.querySelector('.nav-btn');

console.log(navigation);

// События
navigationBtn.addEventListener('click', openMenu);

// Функции

function openMenu(event){
    navigation.classList.toggle('navigation-active');
}


if (document.documentElement.clientWidth > 768) {

}