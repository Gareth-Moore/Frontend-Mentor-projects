let adviceOutput = document.querySelector('.advice');
let adviceId = document.querySelector('.advice-id');
let adviceRequestBtn = document.querySelector('.api-request-btn');
let apiUrl = "https://api.adviceslip.com/advice";

adviceRequestBtn.addEventListener('click', e => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        adviceId.textContent = data.slip.id;
        adviceOutput.textContent = data.slip.advice;
        data = 0;
    })
})
    
