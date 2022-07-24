
//--------------**Iteración #1: Creando Events**
//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click




/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

Paso1: Agregar boton en html con ID btnTOclick
Paso2: Anadir evento click en js
Paso3: Crear funcion de ejecucion del "evento click" */

//Creamos la constante para poder unir el js con el html y asi poder trabajar las funciones/dinamismo desde el JS
const button = document.querySelector("#btnToClick");
//Con el ".innerHTml" añade texto dentro de las etiquetas de HTML que acepte texto
button.innerHTML = "click";


/*Llamamos array button y le añadimos la `funcion predeterminada de JS` ".addEventListener 
(en español `anadir escuchador de eventos`)". Dentro de esta funcion, primero vamos a hacer 
referencia al evento que nos indica en el ejercicio, en este caso "click". Luego para hacer uso del 
evento "click" creamos una funcion el cual le pasamos por parametro lo que vamos a imprimir por consola.
 Sin esta funcion el `.addEventListener` no funciona.*/
button.addEventListener("click", (print) => {
    console.log(print)
});





//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

/*Creamos la constante para poder unir el js con el html y asi poder trabajar las 
funciones/dinamismo desde el JS. Llamamos al "input class=focus" que ya viene dado en el ejercicio HTML.*/
const inputFocus = document.querySelector(".focus");

//Llamamos al array "inputFocus" y le añadimos la `funcion predeterminada de JS` ".addEventListener (en español `anadir escuchador de eventos`)". Dentro de esta funcion, primero vamos a hacer referencia al evento que nos indica en el ejercicio, en este caso "focus" (posicion). Luego para hacer uso del evento "focus" creamos una funcion en el cual le pasamos por parametro lo que vamos a imprimir por consola. Sin esta funcion el `.addEventListener` no funciona.
inputFocus.addEventListener("focus", (select) => {
    console.log(select);
});




//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

/*Creamos la constante para poder unir el js con el html y asi poder trabajar
 las funciones/dinamismo desde el JS. Llamamos al "input class=Value" que ya viene dado en el ejercicio HTML.*/
const inputValue = document.querySelector(".value");

/*Llamamos al array "inputValue" y le añadimos la `funcion predeterminada de JS` ".addEventListener
 (en español `anadir escuchador de eventos`)". Dentro de esta funcion, primero vamos a hacer referencia
  al evento que nos indica en el ejercicio, en este caso "input". Luego para hacer uso del evento "input" creamos 
  una funcion en el cual le pasamos por parametro lo que vamos a imprimir por consola. Sin esta funcion el `.addEventListener` 
  no funciona.*/
inputValue.addEventListener("input", (valor) => {
    console.log(valor.target.value);
});



