let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  /*alert('Click desde el boton');*/
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log (numeroDeUsuario === numeroSecreto);*/
  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p','El número secreto es menor');
    } else {
        asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}
return;
}

function limpiarCaja() {
document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//Si ya sorteamos todos los números
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
} else {
    //Si el numero generado está incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
console.log(numeroSecreto);
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números 
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
  
}

condicionesIniciales();

/*Crear una función que muestra "¡Hola, mundo!" en la consola.*/
function mostrarHola() {
  console.log('¡Hola, mundo!');
}

//mostrarHola();

/*Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.*/
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

//mostrarHolaNombre("Alice");

/*Crear una función que recibe un número como parámetro y devuelve el doble de ese número.*/
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
//console.log(resultadoDoble);

/*Crear una función que recibe tres números como parámetros y devuelve su promedio.*/
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
//console.log(promedio);

/*Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.*/
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
//console.log(numeroMayor);

/*Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.*/
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
//console.log(resultado);

/*Resolución del desafío 3
Desafíos:Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.

Sugestión de respuestas

//1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}

//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);


//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);


//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);


//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);


6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
*/
