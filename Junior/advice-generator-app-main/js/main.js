let adviceOutput = document.querySelector('.advice');
let adviceId = document.querySelector('.advice-id');
let adviceRequestBtn = document.querySelector('.api-request-btn');
let btnImgSpin = document.querySelector('.api-request-btn img');
let apiUrl = "https://api.adviceslip.com/advice";

adviceRequestBtn.addEventListener('click', e => {
    btnImgSpin.classList.add('btn-img-spin');
    fetch(apiUrl)
        .then(response => response.ok ? response.json() : Promise.reject("API failed"))
        .then(data => {
            adviceId.textContent = data.slip.id;
            adviceOutput.textContent = data.slip.advice;
            data = 0;
        })
        .catch(err => {
            adviceId.textContent = "0";
            adviceOutput.textContent = "Oops, the API call was unsuccessful... :(";
            console.log(Promise.reject);
        })
})

btnImgSpin.addEventListener('transitionend', e => {
    btnImgSpin.classList.remove('btn-img-spin');
})