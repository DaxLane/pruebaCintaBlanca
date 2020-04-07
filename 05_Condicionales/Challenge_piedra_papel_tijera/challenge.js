// alert (prompt)

let player1 = prompt("Ingresa tu respuesta");
let player2 = prompt("Ingresa tu respuesta");
// console.log(typeof(preguntaEdad));
// let edad = Number(preguntaEdad);
// console.log(typeof(edad));

if (player1 == 'piedra'  && player2 == 'piedra' || player1  == 'papel'  && player2 == 'papel'  || player1 == 'tijera'  && player2 == 'tijera')
{
console.log ('Es un empate')
}
else if (player1 == 'piedra'  && player2 == 'tijera' || player1  == 'papel'  && player2 == 'piedra'  || player1 == 'tijera'  && player2 == 'papel')
{
console.log ('Gana Player 1')   
    }

 else if (player2 == 'piedra'  && player1 == 'tijera' || player2  == 'papel'  && player1 == 'piedra'  || player2 == 'tijera'  && player1 == 'papel')
{
console.log ('Gana Player 2')   
  }

else {
    console.error("Datos incorrectos")}
