const ButtonHeader = document.querySelector(".burger__button");
const Container = document.querySelector(".container");
const BurgerListItems = document.querySelectorAll(".burger__list-item");
ButtonHeader.addEventListener("click", function (e) {
    ButtonHeader.classList.add("burger__button-active")
    BurgerListItems.forEach(function (item) {
        item.classList.add("burger__list-item-active")
    })
})
document.addEventListener("click", function (e) {
    if (!e.target.closest(".burger__button")) {
        ButtonHeader.classList.remove("burger__button-active")
        BurgerListItems.forEach(function (item) {
            item.classList.remove("burger__list-item-active")
        })
    }
})



// $(".button-control").mPageScroll2id({
//     scrollSpeed: 500,
// })

