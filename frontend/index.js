// import arvore from '../main';

var arvoreHtml = document.getElementById("arvore");

var compilerButton = document.getElementById("compilerButton");
compilerButton.addEventListener("click", teste);

// window.setTimeout(main , 1000);
// function main(){
//     // console.clear()
//     // var arvore = localStorage.getItem("arvore");
//     console.log(arvore.arvore);
//     arvoreHtml.innerText = arvore.arvore;
// }

"use strict";
function teste() {
    var parseId;

    function parse(delay) {
        // if (parseId) {
        //     window.clearTimeout(parseId);
        // }

        parseId = window.setInterval(function () {
            var code, result, str, haveError;

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
            // console.log(str);
            // localStorage.setItem("arvore",str);
            arvoreHtml.innerText = str;

            if(haveError)
                arvoreHtml.className = 'bg-danger text-white '
            else
                arvoreHtml.className = ''

            parseId = undefined;
        }, delay || 811);
    };
    parse(300);

    // window.on = function () {load
    //     require(["orion/editor/edit"], function(edit) {
    //        window.editor = edit({className: "editor"});
    //        window.editor.getTextView().getModel().addEventListener("Changed", function () { parse(); });
    //        parse(42);
    //     });
    // };

};