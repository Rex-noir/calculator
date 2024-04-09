import { addNumbers , message} from "./functions.js";

let buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("click", keyPressed)
});

let result = document.querySelector('.result-text');

//Key pressed
function keyPressed(e){
    let element = e.target;
    let symbols = element.textContent;
    let numbers = parseInt(element.textContent);

    if(numbers == "00" || (numbers >= 0 && numbers <= 9)){
        result.textContent += String(element.textContent);
    }

    else if(symbols == "Del") deleteAndClear("delete");
    else if(symbols == "AC") deleteAndClear("clear");
    else if(symbols == "=") operate(result.textContent);
    else{
        result.textContent += String(element.textContent);
    }

}

//specific funtions
function deleteAndClear(type){
    let numbers = result.textContent;
    if (type == "delete"){

        if(numbers.length > 0){
            let newNumbers = numbers.slice(0, numbers.length - 1);
            result.textContent = newNumbers;
        }
    }
    else if(type == "clear"){
        result.textContent = "";
    }
}