//createElement
function createHtmlElement(tagName, className, tagId){

    let node = document.createElement(tagName);

    if (tagId) node.id = tagId;
    if (className) node.className = className;

    return node;
}

//adding function
function addNumbers(array){
    let result = array.reduce((acc, value)=>{
        return acc + value;
    })

    return result;
}
//subtract function
function subtractNumbers(array){
    let result = array.reduce((acc, value)=>{
        return acc-value;
    })
    return result;
}
//multiply numbers
function multiplyNumbers(array){
    let result = array.reduce((acc, value)=>{
        return acc * value;
    })
    return result;
}
//check if it is float
function isFloat(number){
    return Math.ceil(number) !== Math.floor(number);
}
//divideNumbers
function divideNumbers(array){
    let result = array.reduce((acc, value)=>{
        if (value == 0 || acc == 0){
            return "Divide by zero!!"
        }
        return acc / value;
    })
    if(isFloat(result)){
        return Math.round(result * 10000000000) / 10000000000;
    }
    return result;
}

//findModulo
function findModulo(array){
    let result = array.reduce((acc, value)=>{
        return acc % value;
    })
    if (result === 0) {
        // Check if the value is negative zero
        if (1 / result === -Infinity) {
            // Convert negative zero to regular zero
            return 0;
        }
    }
    return result;
}

//logMsg
function message(text){
    let msgH = document.querySelector(".logMsg span");
    let container = document.querySelector(".logMsg");
    let oriColor = msgH.style.backgroundColor;
    let oriBgColor = container.style.backgroundColor;
    if (text){
        container.style.backgroundColor = "blue";
        msgH.style.color = "white";
        msgH.textContent = text;
        setTimeout(() => {
            container.style.backgroundColor = oriBgColor;
            msgH.style.color = oriColor;
            msgH.textContent = "Ace Calculator";
        }, 4000);
    }
    else{
        container.style.backgroundColor = "black";
        msgH.style.color = "red";
        msgH.textContent = "Message details not specified";
        setTimeout(() => {
            container.style.backgroundColor = oriBgColor;
            msgH.style.color = oriColor;
            msgH.textContent = "Ace Calculator";
        }, 5000);
    }
}
export {createHtmlElement, addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, findModulo, message, isFloat};