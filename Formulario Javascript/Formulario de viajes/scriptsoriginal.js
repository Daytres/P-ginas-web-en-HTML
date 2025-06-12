const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const apelidos = document.getElementById("apelidos");
const idade = document.getElementById("idade");
const curso = document.getElementById("curso");
const centro = document.getElementById("centro");
const observacions = document.getElementById("observacions");
const actividades = document.querySelectorAll('div input[type="checkbox"]');//Engadiríamos o id antes do input
const consentimiento = document.querySelectorAll('input[name="consentimiento"]');//Antes tenía un []:checked, lo borramos para que funcionase el consentimiento

const inscribir = document.querySelector("#inscribir");
const cancelar = document.querySelector("#cancelar");


formulario.addEventListener("submit", function (evento){
    evento.preventDefault();  //Para prevenir que a páxina se envíe por defecto

    if(validarCampos()){
        if(confirm("¿Quieres enviar este formulario?")){//cando é correcto pide que confirmemos. Devolve true o false
            formulario.submit(); //Se os campos validaron, enviará o formulario
        }else{
            alert("Formulario cancelado");
        }
    } else{
        alert("Por favor, rechead todos os datos!!!"); //salta alerta de envío cancelado
    }

});

cancelar.addEventListener("click", function(){
    formulario.reset();
});



function validarCampos(){
    //return true; // Si esta en false, saldrá la alerta de: "Por favor, rechead todos os datos!!!
    return validarNome() &&  validarApelidos() && validarIdade() && validarCurso() &&
    validarCurso() && validarCentro() && validarObservacions() && validarActividades() &&
    validarConsentimiento();
}

function validarNome(){
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)*$/i; //i es de insensitive para que coja también las minúsculas, el + para no poner límite
    if(exReg.test(nome.value)){  // (?:) Es para crear otro grupo. [\s]  en este caso es un espacio entre 2 nombres, para personas con dos nombres. 
          return true;                 //Se usa * en vez de + al final porque hay personas con un solo nombre, el + obligaría a poner siempre 2 nombres
    }else{
        return false;
    }                     
                                                           
    //return true;                        
}

function validarApelidos(){
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)+$/i; //En este usamos el + al final para que haya 2 apellidos obligatoriamente
    if(exReg.test(apelidos.value)){  
          return true;                 
    }else{
        return false;
    }                                                                            
}


function validarIdade(){
    let exReg=/^[0-9]{1,2}$/;// {1,2} Edad que tenga 1 dígito o 2 dígitos
    if(exReg.test(idade.value)){
        return true;
    } else{
        return false;
    }

}

function validarCurso(){
    return true;

}

function validarCentro(){
   // return true;
   let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)*$/i; 
   if(exReg.test(centro.value)){

    return true;
} else{
    return false;

    }
}

observacions.addEventListener("input",function(){   
    if(this.value.length > 10){
        this.value = this.value.substring(0, 10); //corta o texto cando llega el limite de caracteres, 10 letras en este caso
    }
});


/* Es como lo anterior pero más complicado, no compensa y además lo tengo mal copiado
observacions.addEventListener("keydon", function(event){
    if(this.value.length >= 250 && event.key !== "Backspace"  && event.crtKey !=="Delete" && !event.crtlKey){
        event.preventDefault():
    }
}
    */




function validarObservacions(){
    return true;

}

function validarActividades(){
    let checkeado = false; //ao principio non temos nada seleccionado
    for (let i = 0 ; i < actividades.length; i++){
        if(actividades[i].checked){

            checkeado = true;
        }
    }
    if(!checkeado){
        return false
    }else{
    return true;
    }
}

function validarConsentimiento(){
    let checkeado = false;
    for(let i = 0; i < consentimiento.length; i++){
        console.log(consentimiento[i].checked)
        if(consentimiento[0].checked){
            checkeado = true;
        }
    }
    if(!checkeado){
        return false;
    } else{ 
        return true;
    }
 


}
