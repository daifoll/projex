/* СКРИПТ КНОПКИ НА ВЕРХ */

let scrollStep = 4047;
let btn = document.querySelector('.to-top')

// События
window.addEventListener('scroll', createToTopButton);

// Функции
function createToTopButton(event){
    let scrollCurrent = window.pageYOffset; 
    let btn = document.querySelector('.to-top')
    
    if(btn){
        if(scrollCurrent <= scrollStep){
            btn.remove()
        }else{
            return false
        }
    }
    

    if(scrollCurrent >= scrollStep){
        let btn = document.createElement('button');
        btn.classList.add('to-top');
        document.body.append(btn);

        btn.addEventListener('click', toTopMove)
    }  
}

function toTopMove(event){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

