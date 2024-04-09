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
        let total = 0;
        if (value < 0) {
            value = Math.abs(value);
        }
        else if(value > 0){
            value *= -1;
        }
        total = acc - value;
        return total;
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

//divideNumbers
function divideNumbers(array){
    let result = array.reduce((acc, value)=>{
        if (value == 0 || acc == 0){
            return "Divide by zero!!"
        }
        return acc / value;
    })
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

    if (text){
        msgH.textContent = text;
        setTimeout(() => {
            msgH.textContent = "Ace Calculator";
        }, 5000);
    }
    else{
        msgH.textContent = "Message details not specified";
        setTimeout(() => {
            msgH.textContent = "Ace Calculator";
        }, 5000);
    }
}
export {createHtmlElement, addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, findModulo, message};