import { addNumbers , message, multiplyNumbers} from "./functions.js";

let buttons = document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("click", keyPressed)
});

let result = document.querySelector('.result-text');

//Key pressed
function keyPressed(e){
    let element = e.target;
    let symbols = element.textContent;
    let numbers = (element.textContent);

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
//Keyboard listening
document.addEventListener("keypress", (event)=>{
    let key = event.key;
    let numbers = ['0','1','2','3','4','5','6','7','8','9','.','+','-'];

    if (numbers.includes(key)){
        result.textContent += key;
    }
    else{
        switch(key){
            case 'Enter':
            case '=':
                operate(result.textContent);
                break;
            
            case '/':
                result.textContent += '÷';
                break;
            case '*':
                result.textContent += '×';
                break;
            case 'x':
                result.textContent += '×';
                break;
            case 'Backspace':
                deleteAndClear("delete");
                break;
            case 'Delete':
                deleteAndClear("delete");
                break;
            default:
                message("Keyboard doesn't match anything!");
        }
    }

})
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
        result.textContent = calculate(alphanumerics);
    }
    else{
        message(validateOperator(alphanumerics).message);
    }

}
//validating
function validateOperator(alphanumerics){
    const consecutiveModRegex = /(?:mod){2,}/;
    if(isOperator(alphanumerics[0]) || isOperator(alphanumerics[alphanumerics.length-1])){
        return {
            valid:false,
            message:"First and last should not be OP!"
        }
    }
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
//calculate fn
function calculate(problem){
    let result = 0;
    let multi = doMulti(problem);
    console.log(((multi)));
    return result;
}

function doMulti(problem){
    let newProb = [];
    if(problem.indexOf("×") == -1){
        return problem;
    }
    let numbers = getNumbers(problem, problem.indexOf("×"));
    console.log(numbers.numbers[0]);

    let multiFirst = multiplyNumbers(numbers.numbers);
    console.log(problem);
    newProb = (problem.slice(0,numbers.leftPos)
                    .concat([multiFirst])
                    .concat(problem.slice(numbers.rightPos+1)));
    return doMulti(newProb);
}

//get numbers near the operators
function getNumbers(problem, position){
    let leftPosition = position;
    let rightPosition = position;
    let numbers = [];
    let leftSide =[];
    let rightSide = [];

    while(leftPosition >0 && !isOperator(problem[leftPosition-1])){
        if (!isNaN(parseFloat(problem[leftPosition - 1]))|| problem[leftPosition - 1] === '.') {
            leftSide.unshift(problem[leftPosition - 1]); // Store digits and dot in reverse order
        }        leftPosition--;
    }
    numbers.push((leftSide.join('')));

    while(rightPosition <problem.length && !isOperator(problem[rightPosition+1])){
        if (!isNaN((problem[rightPosition + 1])) || problem[rightPosition + 1] === '.') {
            rightSide.push(problem[rightPosition + 1]); // Store digits and dot in order
        }        rightPosition++;
    }
    numbers.push((rightSide.join('')));

    return {
        numbers :numbers,
        rightPos : rightPosition,
        leftPos : leftPosition,
    };
}