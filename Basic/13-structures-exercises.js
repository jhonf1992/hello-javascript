/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// 1. Crea un array que almacene cinco animales

let myAnimals = ["Caballo", "Vaca", "Cerdo", "Gallina", "Toro"];

// 2. Añade dos más. Uno al principio y otro al final

myAnimals.push("Gallo");
myAnimals.unshift("Pollo");
console.log(myAnimals);

// 3. Elimina el que se encuentra en tercera posición

myAnimals.splice(3,1)
console.log(myAnimals);

// 4. Crea un set que almacene cinco libros

let myBooks = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"]);

// 5. Añade dos más. Uno de ellos repetido

myBooks.add("Libro1");
myBooks.add("Libro6");
console.log(myBooks);

// 6. Elimina uno concreto a tu elección

myBooks.delete("Libro1");
console.log(myBooks);

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map