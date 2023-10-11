var codigoElem = document.getElementById("codigo");
var arvoreHtml = document.getElementById("tree");

var compilerButton = document.getElementById("compilerButton");
compilerButton.addEventListener("click", teste);


let haveError = false;
"use strict";
function teste() {
    var parseId;

    function parse(delay) {
        // window.clearTimeout(parseId);

        // parseId = window.setInterval(function () {
            var code, result, str;

            code = getCode();
            // id('info').className = 'alert-box secondary';

            try {
                result = JavaParser.parse(code);
                str = JSON.stringify(result, null, 4);
                haveError = false;
                // id('info').innerHTML = 'No error';
            } catch (err) {
                str = err.name === 'SyntaxError'
                    ? "Location: " + JSON.stringify(err.location, null, 4) + "\n" + err
                    : err.name + ': ' + err.message;
                haveError = true;
                // id('info').innerHTML  = str;
                //id('info').className = 'alert-box alert';
            }

            //id('syntax').value = str;
            // localStorage.setItem("arvore",str);
            // arvoreHtml.innerText = str;
            chamarGeradorDeArvore(str);

            

            parseId = undefined;
        // }, delay /*|| 811*/);
    };
    parse(1000);

};

function chamarGeradorDeArvore(str){
    // debugger
    const treeContainer = document.getElementById("tree");
    // const json = document.getElementById("arvore");
    
    // console.log(str);
    if(str.includes("Location")){
        arvoreHtml.className = 'bg-danger text-white'
        arvoreHtml.innerHTML = str
        // arvoreHtml.appendChild(str);
    }
    else{
        arvoreHtml.className = ''
        arvore = JSON.parse(str)
        createTree(treeContainer, arvore);
    }
        

        
    
}

function createTree(parentElement, data) {
    parentElement.innerHTML = ''

    const ul = document.createElement("ul");

    // console.log(parentElement, data, ul)
    for (const key in data) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${key}:</strong>`;

        if (typeof data[key] === "object" && data[key] !== null) {
            createTree(li, data[key]);
        } else {
            const span = document.createElement("span");
            span.textContent = data[key];
            li.appendChild(span);
        }

        ul.appendChild(li);
    }
    parentElement.appendChild(ul);
}