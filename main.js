//funciones
//function ejemplo_funcion() {}
/*
function saludo(){
    alert("Hola Mundo");
}

saludo();*/

//parametros
//ejemplo funcion que salude al usuario con su nombre
/*
function saludo2(nombre, juan=true){
    if(juan){
        alert ("Hola" + nombre + "que gusto de verte");
    }else{
        alert("Hola" + nombre);
    }
    
}

const nom = prompt("Como te llamas");
saludo2(nom, false);*/

//Ejercicio 1
/*
const edad = prompt("Cuál es tu edad?")

function dato(usuario){
    if(usuario == 18){
        alert("Felicidades es tu primera votación")
    }else if(usuario <=18){
        alert("lo siento no puedes votar")
    }else if(usuario >=19 && usuario <=30){
        alert("Solo puedes votar por diputados")
    }else if(usuario <=31){
        alert("Muchas gracias por participar")
    }
}

dato(edad);*/ 

/*
const invocacion = function(){}

invocacion();*/
 

//IIFE
// (function(){})

//calculadora básica


let num1 = 0;
let num2 = 0;

function solicitarNumeros(){
    num1 = Number (prompt("escribe un número"));
    num2 = Number (prompt("escribe otro número"));    
}

function calculadora(){
    let promptNumeros = true;
    while (promptNumeros){

        let opciones = prompt("elige suma resta division multiplicacion");

        switch(opciones){
            case "suma":
                solicitarNumeros();
                if (num1 % 3 === 0 || num2 % 3 === 0){
                    alert("0");
                } else {
                    alert(num1 + num2);
                }
                break;

            case "resta":
                solicitarNumeros();
                if (num1 > num2){
                    alert(num2-num1);
                } else {
                    alert(num1-num2);
                }
                break;
            
            case "multiplicacion":
                solicitarNumeros();
                if (num2 % 2 === 0)
                    alert(num1 * num2 *2);
                else
                    alert(num1*num2);
                break;
            
            case "division":
                solicitarNumeros();
                alert("resultado: " + (num1/num2) + " residuo: " + (num1 % num2));
                break;

            default: 
                alert("Operación no valida");

        }
        
        promptNumeros = (prompt("desea continuar? Si o No").toLowerCase() == "si");
    }
}
calculadora();
