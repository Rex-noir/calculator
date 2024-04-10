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
//operate
function operate(alphanumerics){
    
    if (validateOperator(alphanumerics).valid){
        message("Valid");
    }
    else{
        message(validateOperator(alphanumerics).message);
    }

}
//validating
function validateOperator(alphanumerics){
    const consecutiveModRegex = /(?:mod){2,}/;
    if(consecutiveModRegex.test(alphanumerics)) return {
        valid:false,
        message:"Consecutive opertaors found!"
    }

    for (let i = 0; i < alphanumerics.length -1; i++){
        
        if(isOperator(alphanumerics[i]) && isOperator(alphanumerics[i+1])) {
            return{valid:false,message:"Consecutive opertaors found!"}
        }
    }
    return { valid: true, message: "Success!" };

}
function isOperator(char){
    const operators= /(?:×|\+|÷|-|mod)/;
    return operators.test(char);
}