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

/* ПЕРЕМЕННЫЕ */
let fullNameStatus = false;
let emailStatus = false;
let phoneSatus = false;



/* СОБЫТИЯ */
form.addEventListener('submit', event => {
    event.preventDefault();
    
    validateInputs();

    if(fullNameStatus && emailStatus && phoneSatus){
        createModalWindow()  
    }
});

// Проверяем на валидность инпуты после каждого изменения
inputItems.forEach((item)=>{
    item.addEventListener('input', ()=>{
        validateInputs();
    })
})


// Запрещаем вводить символы в phone input
phone.addEventListener('input', function(){
    let reg = /[A-Za-zА-Яа-я_=!"@№#;$%:^?&*=.,/|]/g
    this.value = this.value.replace(reg, '')

    
})



/* ФУНКЦИИ */

// Функция создания модального окна

function createModalWindow(){
    let connection = document.querySelector('.connection');
        
    if(document.querySelector('.connection__modalWindow')) return
    
    let connectionModalWindow = document.createElement('div');
    connectionModalWindow.classList.add('connection__modalWindow');
    connectionModalWindow.innerText = 'Your request has been successfully sent!'
    
    let connectionModalWindowBtn = document.createElement('button');
    connectionModalWindowBtn.classList.add('connection__modalWindowBtn');
    connectionModalWindowBtn.innerText = 'X'
    
    connectionModalWindowBtn.addEventListener('click', ()=>{
        connectionModalWindow.remove()
        document.body.classList.remove('modalWindowBlackout');
    })

    connectionModalWindow.append(connectionModalWindowBtn)
    
    document.body.classList.add('modalWindowBlackout');
    connection.append(connectionModalWindow);

}


// Функция валидации инпутов
function validateInputs(){
    
    // Получаем значения всех инпутов и удаляем пробельные символы
    const fullNameValue = fullName.value.trim();
    const phoneValue = phone.value.trim();
    const eMailValue = eMail.value.trim();

    // Проверка на валидность fullName
    if(fullNameValue === ''){
        setError(fullName, 'Required field!')
        fullNameStatus = false;
    }else{
        unsetError(fullName)
        fullNameStatus = true;
    }
    
    // Проверка на валидность eMail
    if(eMailValue === ''){
        setError(eMail, 'Required field!')
        emailStatus = false;
    }else if(!isValidEmail(eMailValue)){
        setError(eMail, 'Invalid email!')
        emailStatus = false;
    }else{
        unsetError(eMail)
        emailStatus = true;
    }

    // Проверка на валидность phone
    if(phoneValue === ''){
        setError(phone, 'Required field!')
        phoneSatus = false
    }else if(!isValidPhone(phoneValue)){
        setError(phone, 'Invalid phone number!')
        phoneSatus = false
    }else{
        unsetError(phone)
        phoneSatus = true;
    }
}


function setError(element, message){
    const inputParent = element.parentElement;
    const error = inputParent.querySelector('.request__validation');

    error.innerText = message;
    
    error.classList.add('error');
    element.classList.add('failure')
    element.classList.remove('success')
}

function unsetError(element){
    const inputParent = element.parentElement;
    const error = inputParent.querySelector('.request__validation');

    error.innerText = '';
    error.classList.remove('error');
    element.classList.remove('failure')
    element.classList.add('success')
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
