let menu = document.querySelector("i[title='Open Menu']");
let body = document.querySelector("body")
let modal = document.querySelector("#modal")

console.log(menu);

menu.addEventListener('onClick', function(e){
    menu.innerHTML = "<i class="fa-solid fa-xmark"></i>"
    body.style.overflow = "hidden";
    modal.style.display = "block"
});