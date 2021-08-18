/*console.log("Hola mundo");
alert("hola mundo desde el navegador");*/

/*var resultados = 0;

let a = 5;
let b = 10;
let c = 15;

resultados = (3+b) *c/a *2;*/

/*let nuevavariable = true;*/

//condicionales

/*const valor = true;

if (typeof valor === "string" ) {
    console.log("La variable cumple la condición");
}
else if (typeof valor === "number"){
    console.log("La variable no cumple la condición porque es numero");
}
else{
    console.log("la variable no es ninguna");
}*/

//ejercicio1
//determinar si una persona puede votar 
//1. edad mayor  18 años

/*const edad = 32;

if ((edad >= 18) && (edad <=29 )) {
    console.log("puedes votar");
}
else if (edad === 30){
    console.log("felicidades! puedes votar");
}
else if (edad >= 31){
    console.log("no puedes votar");
}*/

//SWITCH
const valor = 23;

switch(typeof valor){
    case "string":
        console.log("tu variable es string");
        break;
    case "number":
        console.log("tu variable es numero");
         break;
    
    case "boolean":
        console.log("tu variable es booleano");
        break;

    default:
        console.log("no cumple ninguna condicion");
        break;
}

//Ejercicio 2
// mencionar el nombre del día dependiente del número que dé
const dia = 5;

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
         break;
    
    case 3:
        console.log("Miercoles");
        break;
    
    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;
    
    case 6:
        console.log("Sabado");
        break;
    
    case 7:
        console.log("Domingo");
        break;

    default:
        console.log("no cumple ninguna condicion");
        break;
}

//ternario, es una forma abreviada de un if/else

const nombre = "Juan";
const profesion = "contador";

const resultado = nombre === "juan"
    ? profesion === "contador"
        ?"me ayudas con mi declaración" : "¿no conocer algun contador?" 
    : "como te llamas?";
    
    console.log("el tenario entrego; ", resultado);

//ejercicio3

const edad = 10;

edad >= 18 && (edad <=29)
    ? console.log ("puedes votar") : (edad ===30) 
        ? console.log ("felicidades tienes 30, puedes votar") : (edad >=31)
            ? console.log ("ya no puedes votar por viejito") : console.log ("No cumple el valor");


//PROMPT

/*let dia2 = prompt("Escribe un numero del 1 al 7")
dia2 = Number(dia2)

switch(dia2){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
         break;
    
    case 3:
        console.log("Miercoles");
        break;
    
    case 4:
        console.log("Jueves");
        break;

    case 5:
        console.log("Viernes");
        break;
    
    case 6:
        console.log("Sabado");
        break;
    
    case 7:
        console.log("Domingo");
        break;

    default:
        console.log("no cumple ninguna condicion");
        break;
}*/

//FOR

for (let i = 0; i<10; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}

//ejercicio 5

let numeroIncio = prompt("Escribe un numero de inicio")
let numeroFinal = prompt("Escribe un numero de final")

for (let i = numeroIncio; i<=numeroFinal; i++){
    if (i%2){
        console.log(i*2);
    }else if (i % 3 === 0)
    {
        console.log("el numero si es divisible entre 3")
    }else{
        console.log(i)
    }
}

//while

let pregunta = true;

while(pregunta){
    console.log("esto es una iteración");
    const respuesta = prompt ("responde de nuevo: s/n")
    pregunta = respuesta === "s" ? true : false;
}

//ejercicio 6

