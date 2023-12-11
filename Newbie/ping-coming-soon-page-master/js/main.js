let input = document.querySelector('#email');
let errorMessage = document.querySelector("form label");
let formEmail = document.querySelector('.email-form');

formEmail.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value.match((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
        alert(`${input.value}\r\n\r\nEmail submitted successfully`);
        errorMessage.classList.add('hidden');
        input.classList.remove('error-border');
        input.value = "";
    }
    else {
        errorMessage.classList.remove('hidden');
        input.classList.add('error-border');
    }
})

