/* СКРИПТ ВАЛИДАЦИИ */

'use strict'

/* КОНСТАНТЫ */
const form = document.querySelector('.form-request');
const inputItems = form.querySelectorAll('input');
const itemWrapper = document.querySelector('.form-request__item-wrapper');
const fullName = document.querySelector('.form-request__fullName');
const phone = document.querySelector('.form-request__phone');
const eMail = document.querySelector('.form-request__eMail');
const select = document.querySelector('.form-request__select');
const message = document.querySelector('.form-request__item.form-request__message');
const submit = document.querySelector('.form-request__submit');
let status;



/* СОБЫТИЯ */
form.addEventListener('submit', event => {
    event.preventDefault();
    
    validateInputs();

    if(status){
        console.log('Форма отправлена!')
    }
});

// Проверяем на валидность инпуты после каждого изменения
inputItems.forEach((item)=>{
    item.addEventListener('input', ()=>{
        validateInputs()
    })
})


// Запрещаем вводить символы в phone input
phone.addEventListener('input', function(){
    let reg = /[A-Za-zА-Яа-я_=!"@№#;$%:^?&*=.,/|]/g
    this.value = this.value.replace(reg, '')

    
})






/* ФУНКЦИИ */

// Функция валидации инпутов
function validateInputs(){
    
    // Получаем значения всех инпутов и удаляем пробельные символы
    const fullNameValue = fullName.value.trim();
    const phoneValue = phone.value.trim();
    const eMailValue = eMail.value.trim();

    // Проверка на валидность fullName
    if(fullNameValue === ''){
        setError(fullName, 'Required field!')
    }else{
        unsetError(fullName)
    }
    
    // Проверка на валидность eMail
    if(eMailValue === ''){
        setError(eMail, 'Required field!')
    }else if(!isValidEmail(eMailValue)){
        setError(eMail, 'Invalid email!')
    }else{
        unsetError(eMail)
    }

    // Проверка на валидность phone
    if(phoneValue === ''){
        setError(phone, 'Required field!')
    }else if(!isValidPhone(phoneValue)){
        setError(phone, 'Invalid phone number!')
    }else{
        unsetError(phone)
    }
}


function setError(element, message){
    const inputParent = element.parentElement;
    const error = inputParent.querySelector('.request__validation');

    error.innerText = message;
    
    error.classList.add('error');
    element.classList.add('failure')
    element.classList.remove('success')

    status = false;
}

function unsetError(element){
    const inputParent = element.parentElement;
    const error = inputParent.querySelector('.request__validation');

    error.innerText = '';
    error.classList.remove('error');
    element.classList.remove('failure')
    element.classList.add('success')

    status = true;
}

// Валидация почты
function isValidEmail(email){
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return re.test(String(email).toLowerCase());
}

// Валидация номера телефона
function isValidPhone(phone){
    const re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;
    return re.test(String(phone).replace(/\s/g, ''));
}
