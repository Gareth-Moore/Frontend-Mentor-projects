const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelectorAll('.btn-prev');
const nextBtn = document.querySelectorAll('.btn-next');

prevBtn.forEach(button => {
    button.addEventListener('click', e => {
        changeTestimonial();
        console.log("prev")

    })
});

nextBtn.forEach(button => {
    button.addEventListener('click', e => {
        changeTestimonial();
        console.log("next")
    })
});

function changeTestimonial () {
    if (cards[0].classList.contains('hidden')) {
        cards[0].classList.remove('hidden');
        cards[1].classList.add('hidden');
    }
    else if (cards[1].classList.contains('hidden')) {
        cards[1].classList.remove('hidden');
        cards[0].classList.add('hidden');
    }
}

console.log(cards);
console.log(cards[0]);
console.log(cards[1]);