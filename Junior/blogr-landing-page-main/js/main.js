let modalBtn = document.querySelector('.modal');
let servicesModal = document.querySelector('.services-account-container');
let servicesArr = document.querySelectorAll('.service');
let servicesList = document.querySelectorAll('.service-list');
let serviceBtn = document.querySelectorAll('.service-button');

modalBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (e.target.classList.contains('modal-active')) {
        e.target.classList.remove('modal-active');
        modal(false);
    }
    else {
        e.target.classList.add('modal-active');
        hideModalLists();
        modal(true);
    }
})

servicesArr.forEach(i => {
    i.children[0].addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        if (i.children[1].classList.contains('service-list-show')) {
            i.children[1].classList.remove('service-list-show');
            i.children[0].children[1].classList.remove('service-button-img-rotate');
            i.children[0].children[2].classList.remove('service-button-img-rotate');
            i.children[0].children[0].classList.remove('service-button-active');

        }
        else {
            hideModalLists();
            i.children[1].classList.add('service-list-show');
            i.children[0].children[1].classList.add('service-button-img-rotate');
            i.children[0].children[2].classList.add('service-button-img-rotate');
            i.children[0].children[0].classList.add('service-button-active');
        }
    })
});

document.addEventListener('click', e => {
    if (e.target===servicesModal) {
    }
    else {
        hideModalLists();
    }
})

function hideModalLists() {
    servicesArr.forEach(i => {
        i.children[1].classList.remove('service-list-show')
    });
    serviceBtn.forEach(i => {
        i.children[0].classList.remove('service-button-active');
        i.children[1].classList.remove('service-button-img-rotate')
    });
}

function modal (bool) {
    if (bool) {
        servicesModal.classList.remove('hidden');
    }
    else {
        servicesModal.classList.add('hidden');
        hideModalLists();
    }
}