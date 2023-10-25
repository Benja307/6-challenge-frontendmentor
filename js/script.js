const close = document.querySelector("#close");
const menu = document.querySelector("#menu-icon");
const nav_bar = document.querySelector("#nav-bar");
const cart = document.querySelector("#cart");
const popup = document.querySelector("#carro");

menu.addEventListener("click",()=>{
    nav_bar.style.display = "flex";
})

close.addEventListener("click",()=>{
    nav_bar.style.display = "none";
})

cart.addEventListener("click",()=>{
    if(popup.style.display === ""){
        popup.style.display = "flex";
    }else if(popup.style.display === "flex"){
        popup.style.display = "";
    }
})
