let menu = document.querySelector("i[title='Open Menu']");
let body = document.querySelector("body")
let modal = document.querySelector("#modal")
let closemenu = document.createElement('i')
closemenu.innerHTML = "<i class='fa-solid fa-xmark' title='Open Menu'></i>"

console.log(menu);

menu.addEventListener('click', function(e){
    menu.parentElement.replaceChild(closemenu, menu)
    //menu.innerHTML = "<i class='fa-solid fa-xmark' title='Open Menu'></i>"
    body.style.overflow = "hidden";
    modal.style.display = "block"
});