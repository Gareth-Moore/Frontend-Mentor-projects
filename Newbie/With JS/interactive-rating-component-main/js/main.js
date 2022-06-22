let cards = document.querySelectorAll("article");
let ratingsOutput = document.querySelector(".rating-result");
let ratingsBtns = document.querySelectorAll(".ratings-button");
let submitBtn = document.querySelector(".submit-button");
let errorMessage = document.querySelector(".error-message");
let ratingsValue = 0;

ratingsBtns.forEach(i => {
    i.addEventListener('click', e => {
        activeState(e);
    })
});

submitBtn.addEventListener('submit', e => {
    e.preventDefault();
    ratingsBtns.forEach(i => {
        if (i.classList.contains('active')) {
            ratingsValue = i.value;
            showResults(ratingsValue);
            return;
        }
        else {
            errorMessage.classList.remove('hidden');
        }
    });
})

function activeState(e) {
    ratingsBtns.forEach(i => {
        i.classList.remove("active");
    });
    e.target.classList.add("active");
    errorMessage.classList.add("hidden");
}

function showResults (i) {
    cards[0].classList.add('hidden');
    cards[1].classList.remove('hidden');
    errorMessage.classList.remove('hidden');
    ratingsOutput.textContent = `You selected ${i} out of 5`;
}


