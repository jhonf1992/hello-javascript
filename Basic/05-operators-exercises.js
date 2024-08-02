/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

let suma = 4 + 8;
let resta = 10 - 5;
let producto = 10 * 4;
let division = 20 / 3;
let modulo = suma%resta;
let exponenciacion = producto ** division;


// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

suma += 10;
resta -= 2;
producto *= 5;
division /= 3;
modulo %= 2;
exponenciacion **=2;

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(suma > resta);
console.log(suma >= resta);
console.log(suma < producto);
console.log(suma > division);
console.log(suma <= exponenciacion);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(resta > producto);
console.log(division >= suma);
console.log(exponenciacion <= producto);
console.log(division < modulo);
console.log(suma === exponenciacion);

// 5. Utiliza el operador lógico and

console.log(suma > resta && exponenciacion > producto);
console.log(resta == suma && division < modulo);

// 6. Utiliza el operador lógico or

console.log(modulo > exponenciacion || resta < suma);

// 7. Combina ambos operadores lógicos

console.log(suma > resta && suma > division || producto > exponenciacion );

// 8. Añade alguna negación

console.log(!(division > modulo || producto < exponenciacion && suma > resta));

// 9. Utiliza el operador ternario

producto > exponenciacion ? console.log("Producto es mayor que exponeneciacion") : console.log("El producto no es mayor que la exponeneciacion");

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(suma + resta > modulo + division && producto - suma >= producto / suma || modulo > resta);