/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Captura una excepción utilizando try-catch

// class casa {
//     constructor(puertas, ventanas,reja, habitaciones, baños ){
//         this.puertas = puertas,
//         this.ventanas = ventanas,
//         this.reja = reja,
//         this.habitaciones = habitaciones,
//         this.baños  = baños
//     }
// }
// let myHouse = new casa(2,3,"Acero",5,2);

// try {
//     console.log(myHouse.baños);    
// } catch (error) {
//     console.log("Ocurrio un error con esta operacion solicitada.")
// }


// 2. Captura una excepción utilizando try-catch y finally

// try {
//     console.log(myHouses);
// } catch (error) {
//     console.log(`Este elemento de tu la casa no esta disponible, error: `, error.message);
// }finally{console.log("La operacion ha finalizado");}

// 3. Lanza una excepción genérica

// try {
//     console.log(myHouses);
// } catch (error) {
//     console.log(error.message);
// }

// 4. Crea una excepción personalizada

function multiplicacion(a,b) {
    if (typeof a == "number" && typeof b == "number") {
        return a * b;
    } else if(typeof a == "string" || typeof b == "string") {
        throw new myError("El tipo de dato que esta intentando sumar no es un numero", a, b);
        
    }else{
        throw new ReferenceError("Este es otro tipo de error no controlado");
    }
    return a * b;
}

class myError extends Error{
    constructor(message, a, b){
        super(message),
        this.a = a,
        this.b = b
    }

    printValues(){
        
        if (typeof this.a == "string" && typeof this.b == "string") {
            console.log(`Los dos valores son texto: ${this.a} ${this.b}`);
        } else if(typeof this.a == "string" && typeof this.b == "number") {
            console.log(`El primer dato es un texto: ${this.a}`);
        }else if(typeof this.a == "number" && typeof this.b == "string") {
            console.log(`El segundo dato es un texto: ${this.b}`);
        }
    }
}


// 5. Lanza una excepción personalizada

// try {
//     console.log(multiplicacion("Soy un string", 2));
// } catch (error) {
//     error.printValues()
// }

// 6. Lanza varias excepciones según una lógica definida
// try {
//     console.log(multiplicacion(5, "Soy un texto"));
// } catch (error) {
//     error.printValues()
// }
// try {
//     console.log(multiplicacion(myVariable, 2));
// } catch (error) {
//     error.printValues
// }



// 7. Captura varias excepciones en un mismo try-catch


// console.log(multiplicacion(myVariable,2));
// try {
//     console.log(multiplicacion(myVariable, 2));
// } catch (error) {
//     if (error instanceof Error) {
//         error.printValues;
//     }else if(error instanceof ReferenceError) {
//         console.log("Este es un error de referencia, por favor valida tus datos" + error.message);
//     }else{
//         console.log("Este es un tipo de error desconocido"+ error.message);
//     }
// }

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// let myNumbers = [25,"Juan",36,52,96,"Jhon"];
// function convertFloat(a) {
//     if (typeof a == "number" ) {
//         return parseFloat(a);
//     } else if(typeof a != "number"){
//         throw new Error("Este dato no se puede convertir a Float.");
        
//     }
// }

// myNumbers.forEach(numero => {
//     try {
//         console.log(convertFloat(numero))
//     } catch (error) {
//         console.log(error.message);
//     }
// });

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

let vehiculo = {
    tipo: "Carro",
    numLLantas: 4,
    numPuertas: 5,
    color: "rojo" 

}

function dateObject(a,b) {
    if (b in a) {
        console.log(`La propiedad es: ${a.numPuertas}`)
    }else{
        throw new Error("Esta propiedad no existe");
        
    }
}

// try {
//     dateObject(vehiculo,"numPuertas")
// } catch (error) {
//     console.log(error.message)
// }

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10


// for (let i = 0; i < 10 && error instanceof Error; index++) {
    
//     try {
//         dateObject(vehiculo)
//     } catch (error) {
//         console.log(error.message);
        
//     }
//     console.log(`Intento numero ${i}`)
// }

let iterable = 1
let error= true;
while (error && iterable <= 10) {
    try {
        dateObject(vehiculo, "numPuerta");
        error = false;
    } catch (error) {
        console.log(error.message);
        error = true;
    }
    console.log(`Intento numero ${iterable}`)
    iterable++
}