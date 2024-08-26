/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Jhon";
let variableX;

if (variableX == nombre) {
    console.log(nombre);
}else{console.log("No es el nombre")}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Jhon123";
let contraseña = '123Jh';

let usuarioDigitado = "Jhon123";
let contraseñaDigitada = '123Jh';

if (usuario === usuarioDigitado && contraseña === contraseñaDigitada) {
    console.log("Bienvenido al sistema");
}else{console.log("Usuario o contraseña incorrecto.");}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = -5;

if (numero > 0) {
    console.log("El numero es positivo");
}else if (numero == 0) {
    console.log("El numero es Cero");
}else{
    console.log("El numero es negativo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let anios = 15;

if (anios >= 18) {
    console.log("Ya puedes votar");
}else{
    let diferencia = 18 - anios 
    console.log(`Aun no puedes votar porque tienes ${anios} Años, aun te faltan ${diferencia} Años para poder votar`);
};

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let edad = 15;

edad > 18? console.log("Eres Adulto"): console.log("Eres Menor");

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = "Febrero";

if (mes == "Abril" || mes == "Mayo" || mes == "Junio") {
    console.log("Estamos en Primavera");
} else if( mes == "Julio" || mes == "Agosto" || mes == "Septiembre") {
    console.log("Estamos en Verano");
}else if (mes == "Octubre" || mes == "Noviembre" || mes == "Diciembre") {
    console.log("Estamos en Otoño");
}else{
    console.log("Estamos en invierno");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (mes == "Enero" || mes == "Marzo" || mes == "Mayo" || mes == "Julio" || mes == "Agosto" || mes == "Octubre" ||mes == "Diciembre" ) {
    console.log("Este mes tiene 31 dias");
} else if (mes == "Febrero") {
    console.log("Este mes tiene 28 dias");
}else{
    console.log("Este mes tiene 30 dias.");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Ingles";

switch (idioma) {
    case "Ingles":
        console.log("Good Morning");
        break;
    case "Español":
        console.log("Buenos dias");
        break;
    case "Frances":
        console.log("Bonjour");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6



switch (mes) {
    case "Enero":
        console.log("Estamos en invierno");
        break;
    case "Febrero":
        console.log("Estamos en invierno");
        break;
    case "Marzo":
        console.log("Estamos en invierno");
        break;
    case "Abril":
        console.log("Estamos en Primavera");
        break;
    case "Mayo":
        console.log("Estamos en Primavera");
        break;
    case "Junio":
        console.log("Estamos en Primavera");
        break;
    case "Julio":
        console.log("Estamos en Verano");
        break;
    case "Agosto":
        console.log("Estamos en Verano");
        break;
    case "Septiembre":
        console.log("Estamos en Verano");
        break;
    default:
        console.log("Estamos en Otoño");
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

mes = "Febrero";

switch (mes) {
  case "Febrero":
    console.log("Este mes tiene 28 dias");
    break;
  case "Enero":
    console.log("Este mes tiene 31 dias");
    break;
  case "Marzo":
    console.log("Este mes tiene 31 dias");
    break;
  case "Mayo":
    console.log("Este mes tiene 31 dias");
    break;
  case "Julio":
    console.log("Este mes tiene 31 dias");
    break;
  case "Agosto":
    console.log("Este mes tiene 31 dias");
    break;
  case "Octubre":
    console.log("Este mes tiene 31 dias");
    break;
  case "Diciembre":
    console.log("Este mes tiene 31 dias");
    break;
  default:
    console.log("Este mes tiene 30 dias");
    break;
}