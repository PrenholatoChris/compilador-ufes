var codigoElem = document.getElementById("codigo");
codigoElem.addEventListener("change", getCode);

var compilerButton = document.getElementById("compilerButton");
compilerButton.addEventListener("click", getCode);

function getCode(){
    code = codigoElem.value;
    var arrayWords = code.split(/\s+/);
    
    console.log(arrayWords)
}