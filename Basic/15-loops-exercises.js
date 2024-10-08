/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

// for (let i = 1; i < 21; i++) {
//     console.log(i);
// }

// let numero = 1;
// while (numero <= 20) {
//     console.log(numero);
//     numero++;
// }
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

// let sumTotal = 0;
// for (let i = 0; i <= 100; i++) {
//     let suma = sumTotal + i;
//     sumTotal = suma;    
// }
// console.log(`La suma total es ${sumTotal}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50


// for (let i = 1; i < 51; i++) {
//     if ((i % 2)== 0) {
//         console.log(i);
//     }else{
//         continue
//     }
    
// }

// let num = 1;
// while (num <= 50) {
//     if ((num % 2) == 0) {
//         console.log(num);
//         num++
//     }else{
//         num++
//         continue
//     }
    
// }

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// let names = ["Sofia", "Daniela", "Carlos", "Oscar", "Fabian", "Steven"]

// for (const name of names) {
//     console.log(name);
// }

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// let Cadena = "Esta es una frase de prueba";
// let contador = 0;
// for (const vocal of Cadena) {
//     vocalMinuscula = vocal.toLocaleLowerCase();
//     if ((vocalMinuscula == "a" || vocalMinuscula == "e" || vocalMinuscula == "i" || vocalMinuscula == "o" || vocalMinuscula == "u")) {
//         contador++
//         console.log(contador);
//     }else{
//         continue
//     }
// }
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// let numArray = [1,2,3,5,7,9,10,15];
// let multiplicacion = 1;
// for (let i = 0; i < numArray.length; i++) {
//     multiplicacion *= numArray[i];
//     console.log(multiplicacion);
    
// }

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
// let numTabla = 5;
// let i = 1;
// while (i <= 10) {
//     multiplicacion = i * numTabla;
//     console.log(`${numTabla} x ${i} = ${multiplicacion}`);
//     i++
// }

// 8. Usa un bucle para invertir una cadena de texto

let cadena = "Cadena de prueba";
let cadenaInvertida = [];


for (let i = (cadena.length)-1; i >= 0; i--) {
    cadenaInvertida += cadena[i];
    console.log(cadenaInvertida);
    
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// let n1 = 1;
// let n2 = 1;
// let n3 = n1 + n2;
// let iterable = 0;

// do {
//     if (iterable == 0) {
//         console.log(n1);   
//         iterable++;
//     }else if (iterable == 1) {
//         console.log(n2);
//         iterable++;
//     }else if(iterable == 2){
//         n3 = n1 + n2;
//         console.log(n3);
//         iterable++;
//     }else if(iterable >= 3){
//         n1 = n2;
//         n2 = n3;
//         n3 = n1 + n2;
//         console.log(n3);
//         iterable++;
//     }
    
// } while (iterable < 10);

// let a = 1;
// let b = 1;
// let n = 10;
// for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
// }console.log(b);


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

// let arrayNum = [5,2,6,7,10,11,15,20,30,50];
// let newArrayNum = [];
// for (let i = 0; i < arrayNum.length; i++) {
//     if (arrayNum[i]>10) {
//         newArrayNum.push(arrayNum[i])
//     }else{
//         continue;
//     }
// }
// console.log(newArrayNum);