let menu = document.querySelector("i[title='Open Menu']");
let body = document.querySelector("body");
let modal = document.querySelector(".modal:first-of-type");
check = 0;

console.log(menu);

menu.addEventListener('click', function(e){
    if (check === 0){
        menu.className = "fa-solid fa-xmark"
        body.style.overflow = "hidden";
        modal.style.display = "block";
        check = 1;
    } else {
        menu.className = "fa-solid fa-bars";
        body.style.overflow = "auto";
        modal.style.display = "none";
        check = 0;
    }
});