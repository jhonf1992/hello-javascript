/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.twitch.tv/videos/2225058195?t=00h16m42s
*/

// 1. Crea una clase que reciba dos propiedades

// class vehiculo {

//   constructor(color, nombre ){
//     this.color = color,
//     this.nombre = nombre
    //this.tipo = tipo,
    //this.llantas = llantas
//   }
// }

// 2. Añade un método a la clase que utilice las propiedades

// class vehiculo {

//   constructor(color, nombre ){
//     this.color = color,
//     this.nombre = nombre
//     //this.tipo = tipo,
//     //this.llantas = llantas
//   }
//   misDatos(){
//     console.log(`Soy un ${this.nombre} de color ${this.color}`);
//   }
// }

// let myAuto = new vehiculo("Rojo", "Carro");
// myAuto.misDatos()

// 3. Muestra los valores de las propiedades e invoca a la función

// console.log(myAuto.color);
// console.log(myAuto.nombre);
// myAuto.misDatos();

// 4. Añade un método estático a la primera clase

// class vehiculo {

//     constructor(color, nombre ){
//       this.color = color,
//       this.nombre = nombre
      
//     }
//     static datos(color, nombre){
//       console.log(`Mi ${nombre} es ${color}`);
//     }
//   }

//   vehiculo.datos("Verde", "Bicicleta")

// // 5. Haz uso del método estático

// vehiculo.datos("Verde", "Bicicleta")

// 6. Crea una clase que haga uso de herencia

// class Auto extends vehiculo{

//   ruedas(ruedas){
//     console.log(`Tengo ${ruedas} ruedas`);
//   }
// }

// let myMoto = new Auto("Amarillo", "Moto")

// console.log(`Soy ${myMoto.nombre} de color ${myMoto.color} y tengo ${myMoto.ruedas(2)} ruedas` );

// 7. Crea una clase que haga uso de getters y setters

// class computer{
//   constructor(processor,ram,memory){
//     this.processor = processor,
//     this.ram = ram,
//     this.memory = memory
//   }

//   get MyProcessor(){
//     return this.processor
//   }
//   set ChangeProcessor(processor){
//     this.processor = processor
//   }
// }

// let myPc = new computer("AMD Ryzen 5", "16GB", "SSD-M2-500GB");
// console.log(myPc.MyProcessor);
// myPc.ChangeProcessor = "AMD Ryzen 7";
// console.log(myPc.MyProcessor);

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// class computer{
  
//   #namePc
//   #processor

//   constructor(namePc, processor,ram,memory){
//     this.#namePc = namePc;
//     this.#processor = processor,
//     this.ram = ram,
//     this.memory = memory
//   }

//   get MyProcessor(){
//     return this.#processor
//   }
//   get MyNamePc(){
//     return this.#namePc;
//   }
//   set ChangeName(namePc){
//     this.#namePc = namePc
//   }
// }

// let myPc = new computer("JhonPC","AMD Ryzen 5", "16GB", "SSD-M2-500GB");


// 9. Utiliza los get y set y muestra sus valores

// console.log("The name of my PC is: " + myPc.namePc);
// console.log(myPc.MyProcessor);
// myPc.ChangeName = "PC Jhon";
// console.log(myPc.MyNamePc);

// 10. Sobrescribe un método de una clase que utilice herencia 

class computer{
  
  // namePc
  // processor

  constructor(namePc,processor,ram,memory,operativeSistem){
    this.namePc = namePc;
    this.processor = processor,
    this.ram = ram,
    this.memory = memory,
    this.operativeSistem = operativeSistem;
  }

  MyOperativeSistem(){
    console.log("My operative Sistem is: " + this.operativeSistem);
  }
  // get MyProcessor(){
  //   return this.#processor
  // }
  // get MyNamePc(){
  //   return this.#namePc;
  // }
  // set ChangeName(namePc){
  //   this.#namePc = namePc
  // }
}

let pc = new computer("Jhon", "AMD Ryzen 5", "16GB", "SSD-500GB", "Windows 11")
pc.MyOperativeSistem();


class portatilPc extends computer{
  
  constructor(screen, namePC,processor,ram,memory,operativeSistem){
    super(namePC,processor,ram,memory,operativeSistem),
    this.screen =  screen
  }
  MyOperativeSistem(){
    console.log("My operative sistem is Linux");
  }
}

let MyPortatil = new portatilPc("16'","JhonGut","AMD Ryzen7","16GB","1TB","linux")
console.log(MyPortatil.MyOperativeSistem());