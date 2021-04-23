'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('input'),
        span = document.querySelector('.invalid'),
        form = document.querySelector('form'),
        message = {
            done: 'Your application has been sent!',
            notСorrect: 'You entered an invalid email address!',
            empty: 'You have not entered an email address!'
        };


    function validateError() {
        input.style.border = '2px solid #FF2965'
        span.style.color = '#FF2965'
        span.style.display = 'block';
    }    

    function validateTrue() {
        span.style.display = 'block';
        span.style.color = '#3EE9E5'
        input.style.border = '2px solid #3EE9E5'
        
    }

    function validate() {
        switch (true) {

            case input.validity.valueMissing : 
            validateError();
            span.textContent = message.empty;
            break;

            case input.validity.typeMismatch : 
            validateError();
            span.textContent = message.notСorrect;
            break;

            default :
            span.textContent = message.done;
            validateTrue()

            setTimeout(() => {
                span.style.display = '';
                input.style.border = '';
                form.reset();
            }, 2000)
        }
    }
    
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        validate();
    });

});