/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.twitch.tv/videos/2218300512?t=00h17m10s
*/

// 1. Crea un objeto con 3 propiedades

let user = {
    name: "Jhon",
    lastname: "Gutierrez",
    age: 31,
    occupation: "Software Engineer"
}
// 2. Accede y muestra su valor

console.log(Object.values(user));

// 3. Agrega una nueva propiedad

user.hoobie = "Swimming";
console.log(user);

// 4. Elimina una de las 3 primeras propiedades

delete user.age
console.log(user);

// 5. Agrega una función e invócala

user.jump = function(){
    console.log("The user jump every day");
}
user.jump();
// 6. Itera las propiedades del objeto

for (const key in user) {
    console.log(key);
    console.log(`${key}: ${user[key]}`);
}
// 7. Crea un objeto anidado

user2 ={
    name: "Katheryn",
    lastname: "Montaño",
    occupation: "Adviser",
    hoobie: "Reading",
    families : {
        parents : 2,
        brothers : 1,
        sisters: 2,
        uncles:5,
        grandparents:3,
}}
console.log(user2);
// 8. Accede y muestra el valor de las propiedades anidadas

console.log(user2.families);

// 9. Comprueba si los dos objetos creados son iguales

console.log(user == user2);

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(user.name == user2.name);