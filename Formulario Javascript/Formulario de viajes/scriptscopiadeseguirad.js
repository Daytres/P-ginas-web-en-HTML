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

// **Eventos de validación al perder el foco (blur)**
nome.addEventListener("blur", validarNome);         // Al salir del campo 'nome'
apelidos.addEventListener("blur", validarApelidos); // Al salir del campo 'apelidos'


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
    validarCentro() && validarObservacions() && validarActividades() && validarConsentimiento();
}

function validarNome(){
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)*$/i; //i es de insensitive para que coja también las minúsculas, el + para no poner límite
    if(exReg.test(nome.value)){  // (?:) Es para crear otro grupo. [\s]  en este caso es un espacio entre 2 nombres, para personas con dos nombres. 
        nome.classList.remove("is-invalid");  //Se usa * en vez de + al final porque hay personas con un solo nombre, el + obligaría a poner siempre 2 nombres
        let validNome = nome.parentNode.querySelector("p");
        if (validNome){
            validNome.remove();
        }
        return true;                 
    }else{
        nome.classList.add("is-invalid");
        let validNome = nome.parentNode.querySelector("p");
        if(!validNome){
            validNome = document.createElement("p");
            validNome.setAttribute("class","error");
            nome.parentNode.append(validNome); // Parent es para seleccionar el padre
            validNome.innerHTML="O nome é incorrecto";
        }
    }  
    return false;
}                   
                                                           
    //return true;                        


function validarApelidos(){
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)+$/i; //En este usamos el + al final para que haya 2 apellidos obligatoriamente
    if(exReg.test(apelidos.value)){  
        apelidos.classList.remove("is-invalid");
        let validApelidos = apelidos.parentNode.querySelector("p");
        if (validApelidos){
            validApelidos.remove();
        }
          return true;                 
    }else{
        apelidos.classList.add("is-invalid");
        let validApelidos = apelidos.parentNode.querySelector("p");
        if(!validApelidos){
            validApelidos = document.createElement("p");
            validApelidos.setAttribute("class","error");
            apelidos.parentNode.append(validApelidos); // Parent es para seleccionar el padre
            validApelidos.innerHTML="Os apelidos son incorrectos";
        }
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
