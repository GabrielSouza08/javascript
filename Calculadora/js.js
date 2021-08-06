

var getElement = function(element){
    if(element.charAt(0) === "#"){
       
        return document.querySelector(element);
    } else {
        return document.querySelectorAll(element);
    }
}


var writeNum = function() {
    if(view.innerText.length == 8){
        return;
    }
    else if(view.innerText === "0"){
        view.innerText = "";
    }
    let number = this.innerText;
    view.innerText += number;
}

var setOp = function(){
    if(operation != ""){
        operation = this.innerText;
        return;
    }
    operation = this.innerText;
    firstNum = view.innerText;
    primeiroNum.innerText = view.innerText;
    view.innerText = "";
}

var backspace = function(){
    
    text = view.innerText;
    if(text == ""){
        operation = "";
        if(primeiroNum.innerText != ""){
            view.innerText = primeiroNum.innerText;
            primeiroNum.innerText = "";
            return;
        }
    }
    text = text.substring(0, text.length - 1);
    view.innerText = text;
}
var cleanAll = function(){
    view.innerText = "0";
    operation = "";
    firstNum = "";
    primeiroNum.innerText = "";
}

var resultCalc = function(){
    switch(operation){
        case '+':
           var result = parseFloat(firstNum) + parseFloat(view.innerText);
           break;
        case '-':
            var result = parseFloat(firstNum) - parseFloat(view.innerText);
            break;
        case '*':
            var result = parseFloat(firstNum) * parseFloat(view.innerText);           
            break;
        case '/':
            var result = parseFloat(firstNum)/parseFloat(view.innerText);
            break;
    }
    if(String(result).length > 8){
        view.innerText = "ERROR";
    } else {
        view.innerText = result;
    }
    
    firstNum = "";
    operation = "";
    primeiroNum.innerText = "";
}


var view = getElement("#view"),
 primeiroNum = getElement('#primeiroNum'),
resultOp = getElement('#result'),
numeros = getElement('.num'),
operadores = getElement('.op'),
funcC = getElement('#clean'),
funcAC = getElement('#cleanAll'),
firstNum = 0,
operation = "";

resultOp.onclick = resultCalc;
funcC.onclick = backspace;
funcAC.onclick = cleanAll;

numeros.forEach(function(element){
    element.onclick = writeNum;
});

operadores.forEach(function(element){
    element.onclick = setOp;
});





