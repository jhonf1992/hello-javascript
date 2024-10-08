/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialización

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set : Actualizar o agregar un elemento

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get: Recuperar o traer un valor, se debe pasar la llave.

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has: Permite validar si una llave existe y arroja false o true

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete:  Borra un registro al pasar la llave

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear: elimina todo el Map

myMap.clear()

console.log(myMap)



