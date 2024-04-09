import { addNumbers } from "./functions.js";

let buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("click", keyPressed)
});

let result = document.querySelector('.result-text');

//Key pressed
function keyPressed(e){
    let element = e.target;
    let numbers = parseInt(element.textContent);
    if(numbers == "00" || (numbers >= 0 && numbers <= 9)){
        result.textContent += String(element.textContent);
    }
}