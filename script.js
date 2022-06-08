let menu = document.querySelector("i[title='Open Menu']");
let body = document.querySelector("body");
let modal = document.querySelector("#modal");
//let closemenu = document.createElement('i');
//let menuhtml = "fa-solid fa-bars"
//closemenu.innerHTML = "<i class='fa-solid fa-xmark' title='Open Menu'></i>";
check = 0;

console.log(menu);

menu.addEventListener('click', function(e){
    if (check === 0){
        console.log(check)
        menu.className = "fa-solid fa-xmark"
        body.style.overflow = "hidden";
        modal.style.display = "block";
        check = 1;
    }
    else {
        console.log(check)
        menu.className = "fa-solid fa-bars"
        body.style.overflow = "auto";
        modal.style.display = "none";
        check = 0
    }
});