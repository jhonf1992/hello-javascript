/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

// function sum(a,b) {
//     console.log(a + b);
// }
// sum(5,10);
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// let arrayNum = [15,25,10,5];

// function mayorNum(arreglo) {
//     let numMayor = 0;
//     for(let num of arrayNum) {
//         if (num > numMayor) {
//             numMayor = num;
            
//         }else{
//             continue
//         }
//     }
//     return console.log(numMayor);
// }
// mayorNum(arrayNum);
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

// function countVocales(myString) {
//     let contador = 0;
//     for (const letra of myString) {
//         vocalMinuscula = letra.toLocaleLowerCase();
//         if ((vocalMinuscula == "a" || vocalMinuscula == "e" || vocalMinuscula == "i" || vocalMinuscula == "o" || vocalMinuscula == "u")) {
//             contador++
//         }else{
//             continue
//         }
//     }
//     return console.log(contador);
// }
// countVocales("Katito lo mas bonito")

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// function mayusStrings(myStringArray) {
//     let arrayUpperCase = []
//     for (const element of myStringArray) {
//         elementMayus = element.toUpperCase()
//         arrayUpperCase.push(elementMayus);
//     }
//     return console.log(arrayUpperCase);
// }
// let arrayLowerCase = ["My family is very fine", "My dog is beautifull", "My house is very big"]
// mayusStrings(arrayLowerCase);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// function esPrimo(num) {
//     if (num <= 2) {
//         return true;
//     }else{
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
            
//         }
        
//     }
// }

// function esPrimo(numero) {
//     for (var i = 2; i < numero; i++) {
//         if (numero % i === 0) {
//         return false;
//     }
//     }
//     return numero !== 1;
// }

// console.log(esPrimo(5));

// function esPrimo2(numero) {
//     let contador = 0;
//     for (var i = 1; i <= numero; i++) {
//         if (numero % i == 0) {
//             contador++
//         }
//     }

//     return contador == 2 ? console.log("True") : console.log("False");;
// }

// console.log(esPrimo2(8));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// let primerArray = [2,5,7,9,10,12]
// let segundoArray = [2,3,6,9,11,12]

// function elemementsComune(myArray, myArray2) {
//     let mezclaArray = myArray.concat(myArray2);
//     console.log(mezclaArray);
//     let mySetMezclado = new Set(mezclaArray);
//     let arraySinComun = Array.from(mySetMezclado);
//     return console.log(arraySinComun);
// }
// elemementsComune(primerArray, segundoArray);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// function suma(myArrayNum) {
//     let sumaNum = 0;
//     for (const num of myArrayNum) {
//         if (num % 2 == 0) {
//             sumaNum += num
//         }
//     }
//     return sumaNum;
// }
// let arrayNumeros = [2,3,4,5,6,7,8];
// console.log(suma(arrayNumeros));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// let arrayNume = [2,3,4,5,6];
// let arrayElevado = [];

// function elevacionArray(x) {
    
//     for(let num of x) {
//         let numElevado = num ** 2; 
//         arrayElevado.push(numElevado);
//     }
//     return arrayElevado;
// }
// console.log(elevacionArray(arrayNume));
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

let cadena = "My cadena";
let cadenaInvert = "";

function invertirCadena(cadena) {
    for (let i = cadena.length - 1; i >=0; i--) {
        cadenaInvert += cadena[i];
        
    }
    return console.log(cadenaInvert); 
}
invertirCadena(cadena);
// 10. Crea una función que calcule el factorial de un número dado



function factorialNum(numFactorial) {
    let factorialNumero = 1;
    for (let i = 1; i <= numFactorial; i++) {
        factorialNumero = factorialNumero * i;     
        
    }
    return console.log(factorialNumero);
}
factorialNum(6)