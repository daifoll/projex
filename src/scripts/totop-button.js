/* СКРИПТ КНОПКИ НА ВЕРХ */
'use strict'

// Константы
const footer = document.querySelector('.footer')

// Функции
function toTopMove(event){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Настриваиваем Intersection Observer API при пересечении секции footer
let observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            let btn = document.createElement('button');
            btn.classList.add('to-top');
            document.body.append(btn);

            btn.addEventListener('click', toTopMove)
            
        }else{
            let btn = document.querySelector('.to-top')
            if(btn){
                btn.remove()
            }
        }
    })
}, {threshold: 0.5});

// Инициализируем observer
observer.observe(footer)