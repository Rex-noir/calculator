//createElement
function createHtmlElement(tagName, className, tagId){

    let node = document.createElement(tagName);

    if (tagId) node.id = tagId;
    if (className) node.className = className;

    return node;
}

//adding function
function addNumbers(array){
    let restult = array.reduce((acc, value)=>{
        return acc + value;
    })

    return restult;
}

export {createHtmlElement, addNumbers, subtractNumbers};