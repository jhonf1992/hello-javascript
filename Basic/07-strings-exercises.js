/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Concatena dos cadenas de texto

let cadena1 = "Hola, yo me llamo "
let nombre = "Jhon";
console.log(cadena1 + nombre);

// 2. Muestra la longitud de una cadena de texto

let cadenaLarga = "Esta es la cadena que vamos a contar"
console.log(cadenaLarga.length);

// 3. Muestra el primer y último carácter de un string

console.log(cadenaLarga[0]);
console.log(cadenaLarga[cadenaLarga.length-1]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cadenaLarga.toLowerCase());
console.log(cadenaLarga.toUpperCase());

// 5. Crea una cadena de texto en varias líneas

console.log(`Esta es
    mi Cadena
    de Texto
     de varias lineas`);
// 6. Interpola el valor de una variable en un string


console.log(`${cadenaLarga} y aqui se interpola con texto adicional...`);
// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(cadenaLarga.replace(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cadenaLarga.includes("jhon"));
console.log(cadenaLarga.includes("cadena"));

// 9. Comprueba si dos strings son iguales

let string1 = 'yo me llamo jhon';
let string2 = "Yo me llamo Jhon";

console.log(string1 == string2);
// 10. Comprueba si dos strings tienen la misma longitud

console.log((string1.length == string2.length));

