let buttonAvatar = document.querySelector(".btn-open");
let divAvatar = document.querySelector(".details-avatar");
let buttonSocial = document.querySelector(".btn-close");
let divSocial = document.querySelector(".popup-social");


buttonAvatar.addEventListener("mousedown", e => {toggle();})
buttonSocial.addEventListener("mousedown", e => {toggle();})
window.addEventListener("mousedown", e => {
    if (
        e.target.classList.contains("btn-open") ||
        e.target.classList.contains("btn-close") || 
        e.target.classList.contains("btn-img")
        ) {
        return;
    }
    else {
        if (divSocial.classList.contains("hidden")) {
            console.log(e)
            return;
        } else {
            toggle(e);
            console.log(e)
        }
    }
})  

function toggle () {
    if (divSocial.classList.contains("hidden")) {
        divSocial.classList.remove("hidden");
    }
    else { 
        divSocial.classList.add("hidden");
    }
}
