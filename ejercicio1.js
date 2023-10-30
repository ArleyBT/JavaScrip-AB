//Realizar el algoritmo convierta litros en centilitros, decilitros, galones y onzas

/*Convertir Litros en centilitro JavaScrip

    let l = parseFloat(prompt("Litros"));
    convertir = l * 100;
    document.write(convertir + ("cl"));

*/


/*Convertir litros a decilitro en JavaScrip

    let l = parseFloat(prompt("Litros"));
    convertir = l * 10;
    document.write(convertir + ("dl"));

*/


/*Convertir litros a galones en JavaScrip

    let l = parseFloat(prompt("Litros"));
    convertir = l * 0.264172;
    document.write(convertir + ("gal"));

*/


/*Convertir litros a onzas en JavaScrip

    let l = parseFloat(prompt("Litros"));
    convertir = l * 33.814;
    document.write(convertir + ("oz"));

*/





// Realizar el algoritmo que convierta las 4 operaciones básicas para dos numeros de entrada

/*
'use strict'

    let numero1 = 20;
    let numero2 = 50;

    let resultado = numero1 + numero2;
    console.log("Suma:" + resultado);

    resultado = numero1 - numero2;
    console.log("Resta:" + resultado);

    resultado = numero1 * numero2;
    console.log("Multiplicacion:" + resultado);

    resultado = numero1 / numero2;
    console.log("Division:" + resultado);

*/





//Realizar el algoritmo que convierta grados centígrados a fahrenheit y viseversa


/*

    function celsiusToFahrenheit(celsius) {
        var fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    }
    
    var celsius = 80;
    var fahrenheit = celsiusToFahrenheit(celsius);
    console.log(celsius + " grados Celsius son equivalentes a " + fahrenheit + " grados Fahrenheit.");

*/

/*

    function fahrenheitToCelsius(fahrenheit) {
        var celsius = (fahrenheit - 32) * 5/9;
        return celsius;
    }
    
    var fahrenheit = 10; 
    var celsius = fahrenheitToCelsius(fahrenheit);
    console.log(fahrenheit + " grados Fahrenheit son equivalentes a " + celsius + " grados Celsius.");

*/


//Realizar el algoritmo que calcule el valor a pagar por algunos galones de gasolina si sabemos que cada centílitro cuesta 25 pesos, imppimir el valor a pagar y la cantidad de gasolina despachada en litros 

/*
    var costoPorCentilitro = 25; 
    var cantidadCentilitros = 7500; 

    var valorAPagar = costoPorCentilitro * (cantidadCentilitros / 100);

    var cantidadLitros = cantidadCentilitros / 100;

    console.log("Cantidad de gasolina despachada: " + cantidadLitros + " litros");
    console.log("Valor a pagar: $" + valorAPagar.toFixed(2));

*/





/*

Realizar un algoritmo que calcule el salario de un empleado según los siguientes parámetros.
a.Si gana menos de 699.999, Descuento de pensión =2%, y más un Aux. de transporte= 6%.
b. Si gana entre 700.000 y 999.999, Descuento de pensión =4%, Subsidio familiar = 12.000,
sino le pagan el mismo salario.
c. Si gana más del millón Descuento de pensión =6%.

*/

/*

    function calcularSalario(salarioBase) {
        var salario = salarioBase;
        var descuentoPension = 0;
        var subsidioFamiliar = 0;
        var auxTransporte = 0;
    
        if (salarioBase < 700000) {
        descuentoPension = salarioBase * 0.02;
        auxTransporte = salarioBase * 0.06;
        } else if (salarioBase >= 700000 && salarioBase <= 999999) {
        descuentoPension = salarioBase * 0.04;
        subsidioFamiliar = 12000;
        } else if (salarioBase > 1000000) {
        descuentoPension = salarioBase * 0.06;
        }
    
        salario = salarioBase - descuentoPension + subsidioFamiliar + auxTransporte;
    
        return salario;
    }
    

    var salarioBase = 800000; 
    
    var salarioFinal = calcularSalario(salarioBase);
    console.log("Salario del empleado: $" + salarioFinal.toFixed(2));

  */