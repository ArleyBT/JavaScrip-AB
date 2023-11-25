'use strict'

//Realizar unprograma que permita generar 100 numeros e imprimir solo los numeros pares 

/*
let miArreglo1 = []

for (let i = 1; i < 100; i++){
    miArreglo1[i] = i+1;

    console.log(miArreglo1);
}

console.log(miArreglo1);

let miArrayResultado = miArreglo1.filter(element => element % 2 === 0);
console.log(miArrayResultado);
*/


//--------------------------------------------------------------------------------------



//Realizar un programa que permita sumar los 150 primeros números

/*
function sumaPrimeros150Numeros() {
    var suma = 0;

    for (var i = 1; i <= 150; i++) {
        suma += i;
    }

    return suma;
}

// Resultado
var resultado = sumaPrimeros150Numeros();
console.log("La suma es:" + resultado);
*/


//--------------------------------------------------------------------------------------



//Leer 10 precios de productos y calcular cuánto cuestan los 10 productos.
/*
function calculaSumaPrecios() {
    var suma = 0;

    for (var i = 1; i <= 10; i++) {
        var precio = parseFloat(prompt("Escriba el valor del producto " + i));

        if (!isNaN(precio)) {
            suma += precio;
        } else {
          | alert("Por favor, esciba un número válido" + i);
            i--;
        }
    }

    return suma;
}

var resultado = calculaSumaPrecios();
console.log("El costo total de los 10 productos es: " + resultado);
*/


//--------------------------------------------------------------------------------------



//Leer los primeros 50 números y contar cuantos múltiplos de 3 hay, imprimir la cantidad.

/*
function MultiplosDeTres() {
    var Multiplos = 0;

    for (var i = 1; i <= 50; i++) {
       
        if (i % 3 === 0) {
            Multiplos++;
        }
    }

    return Multiplos;
}

var resultado = MultiplosDeTres();
console.log("Los multiplos de 3 entre los primeros 50 números es de: " + resultado);
*/


//--------------------------------------------------------------------------------------



//Leer n cantidad de notas de un estudiante e imprimir por pantalla.

/*
function leerEImprimirNotas() {
      var notas = parseInt(prompt("Escriba la cantidad de notas:"));

     if (isNaN(notas) || notas <= 0) {
        alert("Escriba un número válido y mayor que cero.");
        return;
    }
    
    for (var i = 1; i <= notas; i++) {
       
        var nota = parseFloat(prompt("Escriba la nota " + i + ":"));
     
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Escriba una nota apropiada entre 0 y 10.");
         
            i--;
        } else {
         
            console.log("Nota " + i + ": " + nota);
        }
    }
}

// Llamada a la función
leerEImprimirNotas();
*/


//--------------------------------------------------------------------------------------



//Llenar un arreglo con los primeros 100 números de la sucesión Fibonacci. 0,1,1,2,3,5,8,13……………

/*
function Fibonacci() {
    var fibonacciArray = [0, 1];

    for (var i = 2; i < 100; i++) {
        
        fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }

    return fibonacciArray;
}


var fibonacciResult = Fibonacci();
console.log("Los 100 numeros primeros de la sucesión Fibonacci son:");
console.log(fibonacciResult);
*/


//--------------------------------------------------------------------------------------



//Llenar un arreglo con los primeros 100 números pares y muestre la suma de los elementos del arreglo.

/*
function NumerosParesYSuma() {
    var numerosParesArray = [];
    var suma = 0;

    for (var i = 2; i <= 200; i += 2) {
       
        numerosParesArray.push(i);
       
        suma += i;
    }

    return { numerosParesArray, suma };
}

var resultado = NumerosParesYSuma();
console.log("Los 100 primeros números pares son:");
console.log(resultado.numerosParesArray);
console.log("La suma de los elementos del es: " + resultado.suma);
*/