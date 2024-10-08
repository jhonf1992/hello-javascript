/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea

// Este es el comentario de ejemplo

// 2. Escribe un comentario en varias líneas

/* este es un comentario de varias
lineas de codigo*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

const simbolConstante = Symbol('Yo');
console.log(simbolConstante);
let cadena = "Soy un string";
let numero = 1254221;
let boleano = true;
let boleano2 = false;
let indefinido = undefined;
let nulo = null;
let simbolo = Symbol('my simbol');
let numeroGrande = BigInt(1214512126515646511564651215412);

// 4. Imprime por consola el valor de todas las variables

console.log(cadena);
console.log(numero);
console.log(boleano);
console.log(boleano2);
console.log(indefinido);
console.log(nulo);
console.log(simbolo);
console.log(numeroGrande);

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof cadena);
console.log(typeof numero);
console.log(typeof boleano);
console.log(typeof boleano2);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof simbolo);
console.log(typeof numeroGrande);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

cadena = "Ahora soy otra cadena";
numero = 2;
boleano = false;
boleano2 = true;
indefinido = '';
nulo = '';
simbolo = Symbol('Es otro simbolo');
numeroGrande = BigInt(444444444444444444444444666666666666666666666666666);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

cadena = true;
numero = false;
boleano = Symbol('El tercer simbolo');
boleano2 = null;
indefinido = 4;
nulo = BigInt(45455556413265465136543131465136431165465465n);
Symbol = undefined;
numeroGrande = 'Ahora soy una cadena 3';

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const cadenaConstante = 'Soy una constante';
const numeroConst = 5;
const boleanoConst = true;
const boleanoConst2 = false;
const indefinidoConst = '';
const nuloConst = null;
//const simboloConst1 = Symbol('IdSimbolo');
const numeroGrandeConst = BigInt(45451213131513165465132169987613);


// 9. A continuación, modifica los valores de las constantes

<<<<<<< HEAD
//cadenaConstante = 'Soy otra constante';


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser
=======
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
>>>>>>> af1c97bc2ac92b5c42ce9a29a8ebd234e226ee90
