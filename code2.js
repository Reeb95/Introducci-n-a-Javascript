// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

/* Obtenemos el div que muestra el resultado y lo almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("resultado");
var msgError = document.getElementById("error");
/* Obtenemos los dos input y los almacenamos en variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");
// Añadimos el evento click a la variable "btn"


btn1.addEventListener("click", function () {
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    var n1 = parseFloat(inputUno.value);
    var n2 = parseFloat(inputDos.value);
    
    resultado.innerHTML=n1+n2;

});
btn2.addEventListener("click", function () {
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    var n1 = parseFloat(inputUno.value);
    var n2 = parseFloat(inputDos.value);
    /* Llamamos a una función que permite realizar la
    suma de los números y los mostramos al usuario" */
    resultado.innerHTML = n1 - n2
});
btn3.addEventListener("click", function () {
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    var n1 = parseFloat(inputUno.value);
    var n2 = parseFloat(inputDos.value);
    /* Llamamos a una función que permite realizar la
    suma de los números y los mostramos al usuario" */
    resultado.innerHTML = n1 * n2;
});
btn4.addEventListener("click", function () {
    /* Obtenemos el valor de cada input accediendo a
    su atributo "value" */
    var n1 = parseFloat(inputUno.value);
    var n2 = parseFloat(inputDos.value);

    /* Llamamos a una función que permite realizar la
    suma de los números y los mostramos al usuario" */
    if (n2 == "0") {
        alert("No puedes dividir por 0!");
        inputDos.value = "";
    } else {

        resultado.innerHTML = n1 / n2;
    }
});
/* Función que retorna la suma de dos números */
function suma(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) + parseInt(n2);
}
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt(n1, n2) {
    return Math.floor(Math.random() * (n2 - n1));
}
document.getElementById("input-uno").addEventListener("change", validacion1);
document.getElementById("input-dos").addEventListener("change", validacion2);
function validacion1() {
    var n1 = document.getElementById("input-uno");
    msgError.innerHTML= "";
    if (isNaN(n1.value) || (n1.value<1)) {
        alert("Ingrese solo números enteros positivos");
        n1.value = "";
    }
}
function validacion2() {
    var n2 = document.getElementById("input-dos");
    msgError.innerHTML= "";
    if (isNaN(n2.value)|| (n2.value<1)) {

        msgError.innerHTML= "Error";
        alert("Ingrese solo números enteros positivos");
        
        n2.value = "";
        
    }
}


