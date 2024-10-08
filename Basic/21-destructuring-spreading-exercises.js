/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let myArray = [1,2,5,10];

let [element1, element2] = myArray;
console.log(element1);
console.log(element2);

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [element7, element6, element3, element4, element5 = 0] = myArray;
console.log(element5);

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let myObject = {
    name: "Jhon",
    age: 31,
    profession: "Engineer",
    email: "jhonf@gmail.com",
    job:{
        address: "CL 71 # 50",
        nameWork: "DevInMotion",
        employed: 20
    }
}

let {profession, name} = myObject;
console.log(name);
console.log(profession);

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes


let {age:edad, email:correo} = myObject;

console.log(correo);
console.log(edad);
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {job : {address,nameWork}} = myObject;
console.log(address);
console.log(nameWork);

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [14,24,34];
let array2 = [...array1, 44, 54];
console.log(array2);

// 7. Usa propagación para crear una copia de un array

let array3 = [...array1];
console.log(array3);

// 8. Usa propagación para combinar dos objetos en uno nuevo

let object2 = {...myObject,
    parents: 2,
    sisters: 4,
    brothers: 0,
    pet: 2
}

console.log(object2);
// 9. Usa propagación para crear una copia de un objeto

let object3 = {...myObject};
console.log(object3);

// 10. Combina desestructuración y propagación

let myArray5 = [4,5,10,20,24];

let myArray6 = [6,7,12,22,26];

let [num1, num2,num3, num4, num5, num7 = [...myArray6]] = myArray5;

console.log(num1);
console.log(num7);
