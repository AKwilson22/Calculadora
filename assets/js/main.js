
// generar las variables
// variable shown, selecciona la clase result, del documento
var shown = document.querySelector(".result");
var result = 0
var temp_result1 = ""
var temp_result2 = ""
var operator = ""

//Función all clear
function all_clear() {
    result = 0
    temp_result1 = ""
    // Actualiza el contenido de texto del elemento 'shown' con el valor de 'result'
    shown.textContent = result;
}

//Funciones suma, resta, multiplicación y división

function plus() {
    temp_result2 = temp_result1
    temp_result1 = ""
    operator = "+"
    shown.textContent = temp_result1
}
function minus() {
    temp_result2 = temp_result1
    temp_result1 = ""
    operator = "-"
    shown.textContent = temp_result1
}
function multiply() {
    temp_result2 = temp_result1
    temp_result1 = ""
    operator = "*"
    shown.textContent = temp_result1
}
function divided() {
    temp_result2 = temp_result1
    temp_result1 = ""
    operator = "/"
    shown.textContent = temp_result1
}

//Funciones Raiz cuadradra y elevado a 2
// Math.pow(base,exponente); asi se escribe elevado
function square_root() {
    result = Math.pow(temp_result1,.5)
    temp_result1 = result
    shown.textContent = result
}
function raised_to() {
    result = Math.pow(temp_result1,2)
    temp_result1 = result
    shown.textContent = result
}

function equal() {
    // los simbolos || funcionan cómo (or)
    if (operator == "+" || operator == "-" || operator == "*" || operator == "/") {
        if (operator == "+"){
            result = parseFloat(temp_result2) + parseFloat(temp_result1)
        }if (operator == "-"){
            result = parseFloat(temp_result2) - parseFloat(temp_result1)
        }if (operator == "*"){
            result = parseFloat(temp_result2) * parseFloat(temp_result1)
        }if (operator == "/"){
            result = parseFloat(temp_result2) / parseFloat(temp_result1)
        }
        temp_result1 = result
        temp_result2 = 0
        shown.textContent = result
        //elimina el operador
        operator = ""
    }
    //si no hay un operador, no hacer nada
    else {
        ""
    }
}
//funciones de numeros
function button_1() {
    temp_result1 = temp_result1 + "1"
    shown.textContent = temp_result1
}
function button_2() {
    temp_result1 = temp_result1 + "2"
    shown.textContent = temp_result1
}
function button_3() {
    temp_result1 = temp_result1 + "3"
    shown.textContent = temp_result1
}
function button_4() {
    temp_result1 = temp_result1 + "4"
    shown.textContent = temp_result1
}
function button_5() {
    temp_result1 = temp_result1 + "5"
    shown.textContent = temp_result1
}
function button_6() {
    temp_result1 = temp_result1 + "6"
    shown.textContent = temp_result1
}
function button_7() {
    temp_result1 = temp_result1 + "7"
    shown.textContent = temp_result1
}
function button_8() {
    temp_result1 = temp_result1 + "8"
    shown.textContent = temp_result1
}
function button_9() {
    temp_result1 = temp_result1 + "9"
    shown.textContent = temp_result1
}
function button_0() {
    temp_result1 = temp_result1 + "0"
    shown.textContent = temp_result1
}
function button_00() {
    temp_result1 = temp_result1 + "00"
    shown.textContent = temp_result1
}
function point() {
    temp_result1 = temp_result1 + "."
    shown.textContent = temp_result1
}


