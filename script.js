function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    

docReady(function() {
    // DOM is loaded and ready for manipulation here

    let menu = document.querySelector("i[title='Open Menu']");
    let body = document.querySelector("body");
    let modal = document.querySelector("section:first-child");
    let check = 0;

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

    let ddtrigger = document.querySelector("#ddedition");
    let ddcontent = document.querySelector(".dropedition .dropdown");
    let check2 = 0;

    ddtrigger.addEventListener('click', function(e){
        if (check2 === 0){
            console.log("ddtrigger has been clicked")
            ddcontent.style.display = "block";
            check = 1;
        } else {
            console.log("ddtrigger has been clicked again")
            ddcontent.style.display = "none";
            chack = 0l
        }
    })
});

