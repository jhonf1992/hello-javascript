/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
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

let mapMonth = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
    
])
console.log(mapMonth);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(mapMonth.has(5));
if (mapMonth.has(5)) {
    console.log(mapMonth.get(5));
} else {
    console.log("Este elemento no existe")
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano

//let summerMonth = new Array();
mapMonth.set("summerMonth", ["Diciembre", "Enero", "Febrero"])
console.log(mapMonth);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let consolesVideogames = ["Super Nintendo", "PSP", "PS2", "PS1", "PS3", "Xbox", "Xbox360", "XboxOne", "PS4"]
console.log(consolesVideogames);
let setConsolesVidegames = new Set(consolesVideogames);
console.log(setConsolesVidegames);
let mapConsolesVideogames = new Map([["consolesVideogamesSet", setConsolesVidegames]]);
console.log(mapConsolesVideogames);