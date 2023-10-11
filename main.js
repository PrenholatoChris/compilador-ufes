var codigoElem = document.getElementById("codigo");
// codigoElem.addEventListener("change", main);

var compilerButton = document.getElementById("compilerButton");
// compilerButton.addEventListener("click", teste);



function getCode(){
    code = editor.getValue()
    // code = codigoElem.value;
    // document.getElementsByClassName("CodeMirror")[0].textContent
    // console.log('aaaaaaaaaaa', editor.display)
    return code;
}

function tokenizeJavaCode(javaCode) {
    // Regular expressions for Java tokens
    const keywords = /^(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|if|implements|import|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|transient|try|void|volatile|while)\b/;
    const identifiers = /^[A-Za-z_]\w*/;
    const numbers = /^\d+(\.\d+)?/;
    const strings = /^"(\\.|[^"])*"/;
    const operators = /^(\+|-|\*|\/|%|==|!=|<|>|<=|>=|&&|\|\||!|&|\||\^|\?|:|=|\+=|-=|\*=|\/=|%=|<<|>>|>>>)/;
    const separators = /^(\{|\}|\[|\]|\(|\)|;|,|\.)/;
    const whitespace = /^\s+/;

    const tokens = [];

    while (javaCode.length > 0) {
        let match;

        if ((match = keywords.exec(javaCode))) {
            tokens.push({ type: 'keyword', value: match[0] });
        } else if ((match = identifiers.exec(javaCode))) {
            tokens.push({ type: 'identifier', value: match[0] });
        } else if ((match = numbers.exec(javaCode))) {
            tokens.push({ type: 'number', value: match[0] });
        } else if ((match = strings.exec(javaCode))) {
            tokens.push({ type: 'string', value: match[0] });
        } else if ((match = operators.exec(javaCode))) {
            tokens.push({ type: 'operator', value: match[0] });
        } else if ((match = separators.exec(javaCode))) {
            tokens.push({ type: 'separator', value: match[0] });
        } else if ((match = whitespace.exec(javaCode))) {
            // Skip whitespace
        } else {
            // If none of the above patterns match, there's an error
            console.error(`Unexpected character: ${javaCode[0]}`);
            break;
        }

        javaCode = javaCode.slice(match[0].length);
    }
    return tokens;
}

function main(){
    const tokens = tokenizeJavaCode(getCode());

    // Print the tokens
    tokens.forEach(token => {
        console.log(`${token.type}: ${token.value}`);
    });
    
    // arvore = teste();
}

var textarea = document.getElementById("codigo");
var editor = CodeMirror.fromTextArea(textarea, {
    lineNumbers: true, // Mostrar números de linha
    mode: "text/x-java", // Definir o modo para Java
    theme: "default" // Escolher um tema, por exemplo, "default"
});

// editor.addEventListener('change',() =>
//     textarea.value = editor.options.value
// );

// console.log(editor)