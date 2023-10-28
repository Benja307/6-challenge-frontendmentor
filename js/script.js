const icon_menu = document.querySelector("#icon-menu");
const icon_close = document.querySelector("#icon-close");
const menu = document.querySelector("nav");
const icon_cart = document.querySelector("#icon-cart");
const modal_cart = document.querySelector("#modal-cart");
const modal_cart_section = document.querySelector("#modal-cart-section");
const modal_btn = document.querySelector("#check-btn");
const cart_clean = document.querySelector("#cart-clean");
const indice_cart = document.querySelector("#indice-cart");
const icon_menos = document.querySelector("#icon-menos");
const icon_mas = document.querySelector("#icon-mas");
const input = document.querySelector("#input-cantidad");
const add_cart_btn = document.querySelector("#form-btn");
const cant_art = document.querySelector(".cantidad-art");
const precio_unit = document.querySelector(".precio-unit");
const total_cart = document.querySelector(".precio-final");//Agrega signo $
const trash = document.querySelector("#icon-trash");
const prev = document.querySelector("#icon-prev");
const next = document.querySelector("#icon-next");
const img_1 = document.querySelector("#img-1");
const img_2 = document.querySelector("#img-2");
const img_3 = document.querySelector("#img-3");
const img_4 = document.querySelector("#img-4");

input.value = 0;
modal_cart_section.style.display = "none";
modal_btn.style.display = "none";
img_1.style.display = "flex";

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

icon_mas.addEventListener("click",()=>{
    ++input.value;
})

icon_menos.addEventListener("click",()=>{
    if(input.value >= 1){
        --input.value;
    }
})

add_cart_btn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(input.value > 0){
        modal_cart.style.display = "flex";
        cart_clean.style.display = "none";
        modal_cart_section.style.display = "flex";
        modal_btn.style.display = "flex";
        indice_cart.style.display = "flex";
        indice_cart.textContent = input.value;
        cant_art.textContent = input.value;
        total_cart.textContent = `$${input.value * precio_unit.textContent}`;
    }else if(input.value == 0){
        cart_clean.style.display = "flex";
        modal_cart_section.style.display = "none";
        modal_btn.style.display = "none";
        indice_cart.style.display = "none";
    }
})

trash.addEventListener("click",()=>{
    cart_clean.style.display = "flex";
    modal_cart_section.style.display = "none";
    modal_btn.style.display = "none";
    indice_cart.style.display = "none";
    input.value = 0;
})

next.addEventListener("click",()=>{
    switch(true){
        case (img_1.style.display === "flex"):{
            img_1.style.display = "none";
            img_2.style.display = "flex";
        }
        break;
        case (img_2.style.display === "flex"):{
            img_2.style.display = "none";
            img_3.style.display = "flex";
        }
        break;
        case (img_3.style.display === "flex"):{
            img_3.style.display = "none";
            img_4.style.display = "flex";
        }
        break;
        case (img_4.style.display === "flex"):{
            img_4.style.display = "none";
            img_1.style.display = "flex";
        }
        break;
    }
})

prev.addEventListener("click",()=>{
    switch(true){
        case (img_1.style.display === "flex"):{
            img_1.style.display = "none";
            img_4.style.display = "flex";
        }
        break;
        case (img_2.style.display === "flex"):{
            img_2.style.display = "none";
            img_1.style.display = "flex";
        }
        break;
        case (img_3.style.display === "flex"):{
            img_3.style.display = "none";
            img_2.style.display = "flex";
        }
        break;
        case (img_4.style.display === "flex"):{
            img_4.style.display = "none";
            img_3.style.display = "flex";
        }
        break;
    }
})