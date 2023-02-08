let cards = document.querySelectorAll(".card")

cards.forEach(item => {
    item.addEventListener('click',addActive);
})

function addActive()
{
    console.log(this)
    removeActive();
    this.classList.add("card-active");
}

function removeActive()
{
    cards.forEach(item => {
        item.classList.remove('card-active');
    })
}