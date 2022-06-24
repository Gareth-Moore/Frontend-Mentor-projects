let form = document.querySelector(".form-container");
let formListItem = document.querySelectorAll(".form-item");
let submitBtn = document.querySelector('.submit');
let submitValidity = [false, false, false, false];

form.addEventListener("submit", e => {
    e.preventDefault();
    formListItem.forEach(i => {
        i.children[0].classList.remove("red-border");
        i.children[1].classList.add('hidden');
        i.children[2].classList.add('hidden');
    })
    formListItem.forEach(i => {
        if (i.children[0].id === "first-name") {
            if (i.children[0].value.length === 0) {
                submitValidity[0]=false;
                invalidInput(i);
            }
            else {
                submitValidity[0]=true;
            }
        }
        if (i.children[0].id === "last-name") {
            if (i.children[0].value.length === 0) {
                submitValidity[1]=false;
                invalidInput(i);
            }
            else {
                submitValidity[1]=true;
            }
        }
        if (i.children[0].id === "email") {
            if (!i.children[0].value.match((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))) {
                submitValidity[2]=false;
                invalidInput(i);
            }
            else {
                submitValidity[2]=true;
            }
        }
        if (i.children[0].id === "password") {
            if (i.children[0].value.length === 0) {
                submitValidity[3]=false;
                invalidInput(i);
            }
            else {
                submitValidity[3]=true;
            }
        }
    });
    submitForm();
})

function invalidInput(e) {
    e.children[0].classList.add('red-border');
    e.children[1].classList.remove('hidden');
    e.children[2].classList.remove('hidden');
}

function submitForm() {
    let i = 0;
    submitValidity.forEach(e => {
        if (e!=false) {
            i++;
        }
    })
    if (i === 4) {
        alert("Form submitted successfully!");
        formListItem.forEach(e => { 
            e.children[0].value = "";
        });
    }
}
