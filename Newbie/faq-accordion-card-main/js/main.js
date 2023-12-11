let listItems = document.querySelectorAll(".faq-list-item");

listItems.forEach(i => {
    i.addEventListener('click', e => {
        activeListItem(i);
    })
});

// listItems [0,1,2] = <h2>, <p>, <button>
function activeListItem(e, i) {
    if (e.children[2].classList.contains("active")) 
    {
        e.children[0].style.fontWeight = "400";
        e.children[1].classList.remove("show");
        e.children[2].classList.remove("active");
        return;
    }

    listItems.forEach(i => 
    {
        i.children[0].style.fontWeight = "400";
        i.children[1].classList.remove("show");
        i.children[2].classList.remove("active");
    })

    e.children[0].style.fontWeight = "700";
    e.children[1].classList.add("show");
    e.children[2].classList.add("active");
}
