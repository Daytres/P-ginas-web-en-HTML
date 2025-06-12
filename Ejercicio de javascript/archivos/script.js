
//////variables globales///////////////////////////////////////////////////////////////


//Ejercicio 1

const primeranota = document.querySelector(".nota1");
const segundanota = document.querySelector(".nota2");
const terceranota = document.querySelector(".nota3");
const botonnotas = document.querySelector(".botonnotas");
const mediap = document.querySelector(".resultado");

//Ejercicio 2.1

const boton5x100 = document.querySelector(".boton5");
const texto5x100 = document.querySelector(".t100x5");

//Ejercicio 2.2
const botonDoWhile = document.querySelector(".botondowhile");
const textomulti5 = document.querySelector(".textdowhile");

//Ejercicio 2.3
const boton320 = document.getElementById("boton23");
const texto320 = document.querySelector(".menos320");

//Ejercicio 3.1
const numeroin = document.getElementById("factorA");
const numeroin0 = document.getElementById("factorB");
const botonin = document.getElementById("botoncalcular");
const textcalcu = document.getElementById("calculador");
const textcalcu1 = document.getElementById("calculador1");
const textcalcu2 = document.getElementById("calculador2");
const textcalcu3 = document.getElementById("calculador3");

//Ejercicio 3.2
const nombre = document.getElementById("name");
const apellidos = document.getElementById("surname");
const correo = document.getElementById("email");
const botonin1 = document.getElementById("botondatos");
const tablavistas = document.getElementById("tabla");

//Ejercicio 3.3
const nombre0 = document.getElementById("name0");
const apellidos0 = document.getElementById("surname0");
const correo0 = document.getElementById("email0");
const botonin10 = document.getElementById("botondatos0");
const tablavistas0 = document.getElementById("tabla0");


////////////////////////////////////////////////////////////////////////////////





//Ejercicio 1: Notas con condicionales

botonnotas.addEventListener("click", media); 
function media(){ 
    let resultado = (Number(primeranota.value) + Number(segundanota.value) + Number(terceranota.value)) / 3;

    /* Hubo compañeros que utilizaron switch
    switch(true){
        case resultado < 5:
            mediap.innerHTML = "El alumno está suspenso, su media es de " + resultado.toFixed(2);
            break;  
    }*/

    if (resultado < 5) {
        mediap.innerHTML = "El alumno está suspenso, su media es de " + resultado.toFixed(2); // .toFixed(2) redondea a 2 decimales
    } else if (resultado >= 5 && resultado <= 6) { //Vale poner solamenete : resultado <=6
        mediap.innerHTML = "El alumno aprobó con un suficiente, su media es de " + resultado.toFixed(2);
    } else if (resultado > 6 && resultado <= 7) {// resultado <= 7
        mediap.innerHTML = "El alumno sacó un bien, su media es de " + resultado.toFixed(2);
    } else if (resultado > 7 && resultado <= 8) {//resultado <= 8
        mediap.innerHTML = "El alumno sacó un notable, su media es de " + resultado.toFixed(2);
    } else {
        mediap.innerHTML = "¡¡¡El alumno sacó un sobresaliente!!!, su media es de " + resultado.toFixed(2);
    }
}

/*Tendría que ponerle como tope el número 10,
como no puse tope, no hay un límite de números
(Pueden ser superiores a 10) */


//Ejercicio 2.1

    boton5x100.addEventListener("click",funcion5x100);

    function funcion5x100(){
        let text = "";
        for(let i=1; i<=100; i++){
            if(i % 5 === 0){
                text += "El número " + i + " es múltiplo de 5 <br>";
            }
        }
        texto5x100.innerHTML =text;
    }

//Ejercicio 2.2

    botonDoWhile.addEventListener("click", multiplo5);

    function multiplo5(){
        let texto ="";
        let i=1;
        do{
            i++;
            if(i % 5 === 0){
                texto += "El número " + i + " es múltiplo de 5 <br>";
            }

        }while(i<=100);
        textomulti5.innerHTML = texto;
    }

//Ejercicio 2.3

    boton320.addEventListener("click",resta320);

    function resta320(){
        let text320 = ""; 
        let i = 320;
        while(i >= 160){
            
            text320 += "Fue restado y quedó así " + (i+20) +"-20 =" + i + "<br>" ;
            i-=20;
        }
        texto320.innerHTML= text320;
    }

//Ejercicio 3.1

    botonin.addEventListener("click", calculadora);

    function calculadora(){
        let suma = Number(numeroin.value) + Number(numeroin0.value);
        let resta = Number(numeroin.value) - Number(numeroin0.value);
        let multi = Number(numeroin.value) * Number(numeroin0.value);// Necesito poner ,value para poder calcular
        let division = numeroin.value / numeroin0.value;
        textcalcu.innerHTML="El resultado de la suma entre " + numeroin.value + " y " + numeroin0.value + " es igual a " + suma; 
        textcalcu1.innerHTML="El resultado de la multiplicación es " + multi;
        textcalcu2.innerHTML="El resultado de la resta es " + resta;
        textcalcu3.innerHTML="El resultado de la división es " + division;
    }

//Ejercicio 3.2

    botonin1.addEventListener("click",creartabla);

    function creartabla(){
        tablavistas.innerHTML=
        "<div id= 'tabla' >"+
        "<table>" +
        "<tr>"+
        "<th> Nombre de usuario </th>"+
        "<td>"+ nombre.value +"</td>"+
        "</tr>"+
        "<tr>"+
        "<th> Apellidos </th>" +
        "<td>"+ apellidos.value +"</td>"+
        "</tr>"+
        "<tr>"+
        "<th> Correo electrónico </th>"+
        "<td>"+ correo.value +"</td>"+
        "</tr>"+
        "</table>" +
        "</div>";
    }


    //Ejercicio 3.3

    botonin10.addEventListener("click",creartabla0);

    function creartabla0(){
        //const letras = "abcdefghijklmnopqrstuvwxyz";
        const letrasrandom = Math.random().toString(36).substring(2,4); //toString tiene los valores 0-9 y a-z
        let usuario = nombre0.value.substring(0,2)+
                      apellidos0.value.substring(apellidos0.value.length - 3)+//Alba propuso apellidos0.reverse()
                      correo0.value.substring(0,2)+
                      letrasrandom;

        tablavistas0.innerHTML=
        "<div id= 'tabla'>"+
        "<table>" +
        "<tr>"+
        "<th> Nombre de usuario </th>"+
        "<td>"+ nombre0.value +"</td>"+
        "</tr>"+
        "<tr>"+
        "<th> Apellidos </th>" +
        "<td>"+ apellidos0.value +"</td>"+
        "</tr>"+
        "<tr>"+
        "<th> Correo electrónico </th>"+
        "<td>"+ correo0.value +"</td>"+
        "</tr>"+
        "<th> Usuario generado </th>"+
       "<td>"+ usuario +"</td>"+
        "</table>" +
        "</div>";
    }








