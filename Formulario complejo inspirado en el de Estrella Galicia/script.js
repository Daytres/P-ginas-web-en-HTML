//La variables utilizadas
const formulario = document.querySelector("form");
// Variales de nombre
const labelNombre = document.querySelector("input#nombre + label");
const nombredos = document.getElementById("nombre");
const divnombre = document.querySelector(".boxNombre");
// Variables de apellidos
const labelApellidos = document.querySelector("input#apellidos + label");
const apellidos = document.getElementById("apellidos");
const divApellidos = document.querySelector(".boxApellidos");

const boton = document.querySelector("button");
console.log(formulario, boton)


//La función que se ejecuta al hacer click en el botón
boton.addEventListener("click", function(evento){ //tuve que quitar el submit por click porque no me iba el boton, de 
    evento.preventDefault(); //Para que no se envie solo
    console.log("aquí")

    if(validarCampos()){
        if(confirm("Quieres enviar el formulario")){
            formulario.submit(); //Se envía el formulario
        }else{
            alert("Formulario cancelado");
        }
    }else{
        alert("Rellena todos los campos");
    }
});


//Validaciones 
function validarCampos(){
    let validNombre = validarNombre();
    let validApellidos = validarApellidos();

//La devuelve
return validNombre && validApellidos ;
//return true;
}

function validarNombre(){
    let exReg = /^[A-ZÁÉÍOÚÜÑ]+(?:['\s'][A-ZÁÉÍOÚÜÑ]+)*$/i;
    if(exReg.test(nombredos.value)){
        divnombre.classList.remove("invalido");
        nombredos.classList.remove("invalido");
        let nombreV = document.querySelector("p.error");
        if (nombreV){
            nombreV.remove();
        }
        return true;
    } else {
        divnombre.classList.add("invalido");
        let nombreV = document.querySelector("p.error");
        if (!nombreV){
            nombreV = document.createElement("p");
            nombreV.setAttribute("class", "error");
            labelNombre.classList.add("error");
            divnombre.insertAdjacentElement('afterend', nombreV);
            nombreV.innerHTML = "El nombre es incorrecto";
    }
    return false;
}
}


function validarApellidos(){
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)+$/i;
    if(exReg.test(apellidos.value)){
        apellidos.classList.remove("invalido");
        let apellidosV = apellidos.parentNode.querySelector("p");

        if (apellidosV){
            apellidosV.remove();
        }
        return true;
    } else {
        divApellidos.classList.add("invalido");
        let apellidosV = apellidos.parentNode.querySelector("p");
        if (!apellidosV){
            apellidosV = document.createElement("p");
            apellidosV.setAttribute("class", "error");
            labelApellidos.classList.add("error");
            divApellidos.insertAdjacentElement('afterend', apellidosV);
            apellidosV.innerHTML = "Los apellidos son incorrectos";
        }
        return false;
    }
}


