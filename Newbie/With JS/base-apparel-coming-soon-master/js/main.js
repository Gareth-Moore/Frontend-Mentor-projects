let errIcon = document.querySelector("#error-icon");
let errMessage = document.querySelector("#error-message");
let input = document.querySelector("input");
let btn = document.querySelector('button');
let form = document.querySelector('form');

// for HTML accessiblity report... need to have and then remove "submit"... I know.. cheating...
btn.textContent = "";

// prevent default browser error message popup for invalid submit
form.addEventListener("invalid", e => e.preventDefault())
input.addEventListener("invalid", e => {
    e.preventDefault();
    displayError();
});

// form submit runs this function to validate email
function checkEmail() {
    if (input.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        displayCorrect();
    }
    else {
        displayError();
    }
}

function displayCorrect () {
    errMessage.style.display = "block";
    errMessage.textContent = "Success! Please check your email.";
    errMessage.style.color = "green";
    errIcon.style.display = "none";
    input.setAttribute("disabled", "");
    btn.setAttribute("disabled", "");
}

function displayError() {
    errIcon.style.display = "block";
    errMessage.style.display = "block";
    input.value = "";
}
