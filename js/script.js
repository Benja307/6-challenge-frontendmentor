const icon_menu = document.querySelector("#icon-menu");
const icon_close = document.querySelector("#icon-close");
const menu = document.querySelector("nav");
const icon_cart = document.querySelector("#icon-cart");
const modal_cart = document.querySelector("#modal-cart");


icon_menu.addEventListener("click",()=>{
    menu.style.display = "flex";
})

icon_close.addEventListener("click",()=>{
    menu.style.display = "none";
})

icon_cart.addEventListener("click",()=>{
    if(modal_cart.style.display === "flex"){
        modal_cart.style.display = ""
    }
    else if(modal_cart.style.display === ""){
            modal_cart.style.display = "flex";
    }
})