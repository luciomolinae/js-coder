

//Se le preguntara al usuario cuantas toneladas cosecho de soja, para hacer un estimativo de cuantos dólares equivale



const calculoDolar = (toneladas, valorDolar) => toneladas * valorDolar;

const calculoRetenciones = (calculoDolar, valorRetenciones, calculoDolar) => (calculoDolar * valorRetenciones) - calculoDolar;

var toneladas = parseInt(prompt("¿Cuantas toneladas de soja cosecho?"));

var valorDolar = 541;

var valorRetenciones = 33/100;

let gananciaSin = calculoDolar(toneladas, valorDolar);

let gananciaCon = calculoRetenciones((calculoDolar(valorDolar, toneladas), valorRetenciones, calculoDolar));



alert("Sus ganancias serian... Sin Retenciones " + gananciaSin + " ,Con Retenciones " + gananciaCon);











 

 
  