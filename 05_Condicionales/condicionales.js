// // alert('Descarga ya')

// // let es var nombre del var = valor

// // estructura de una variable

// // let nombre de la variable = valor de la variable

// // --------

// // // alert(‘Descarga ya!’)
// // // if(condicion){
// // //     bloque de codigo si se cumple
// // // }else{
// // //     bloque de codigo si no se cumple
// // // }
// // let num1 = 10
// // let num2 = ‘500’
// // //typeof es para saber que tipo de valor tiene la varible
// // // console.log(typeof(num2));
// // //-----operadores logicos------
// // // =  --> Da un valor
// // // == --> compara valores
// // // === --> compara identicos
// // //100
// // if(num1 === ‘10’ ){
// //     console.log(“Es verdad”);
// // }else{
// //     console.log(‘No es verdad’);
// // }




// // let num1 = 100
// // let num2 = '500'


// // // = da un valor
// // // == compara valores
// // // === compara identicos

// // // 100

// // if (num1 === '10') {

// //     console.log('Es verdad');
// // }

// // else {
// //     console.log ('No es verdad');
// // }


// // si el numero 10 es mayor o menos que 5
// let num3 = '10'


// if (num3 =>'5') {

//     console.log('Es verdad');
// }

// else { 
//     console.log ('No es verdad');
// }





//  modulo investigar
// si un numero es par o impar


// if (num3 % 2 === 0)

// {

//   console.log ('El numero introducido es par');

// }

// else {
//     console.log('El numero introducido es impar');


// }
// ver lo de console y javascript

// operadores logicos
// and  &&
// or   ||


// pase para conducir edad 18
// operadores logicos
// and  &&
// or   ||


// let edad = 18;

// if (edad <=17  && edad<= 70)
// {
//     console.log ('Puedo conducir');
// }
// else if ( edad === 16 || edad === 17);{
//     console.log('Puedes sacar el permiso');
// }
// else if (edad <16 || edad < 70){
//     console.log ('No puedes conducir')
// }
// else{
//     console.error("Datos incorrectos")
// }


// Mejorar mi codigo

let edad = prompt("Ingresa tu edad");
let preguntaEdad = prompt("Ingresa tu edad");
// console.log(typeof(preguntaEdad));
let edad = Number(preguntaEdad);
// console.log(typeof(edad));

if (edad >=18  && edad <= 70)
{
    console.log ('Puedo conducir');
}
else if (edad === 16 || edad === 17)
{
    console.log('Puedes sacar el permiso');
}
else if (edad < 16 || edad > 70)
 {
console.log ('No puedes conducir');
}
else {
    console.error("Datos incorrectos");
}