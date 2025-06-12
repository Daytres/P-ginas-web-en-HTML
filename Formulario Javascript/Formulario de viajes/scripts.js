const formulario = document.querySelector("form");
const nome = document.getElementById("nome");
const apelidos = document.getElementById("apelidos");
const idade = document.getElementById("idade");
const curso = document.getElementById("curso");
const centro = document.getElementById("centro");
const observacions = document.getElementById("observacions");
const actividades = document.querySelectorAll('div input[type="checkbox"]');//Engadiríamos o id antes do input
const fieldsetActividades = document.getElementById("fieldsetActividades");
const consentimiento = document.querySelectorAll('input[name="consentimiento"]');//Antes tenía un []:checked, lo borramos para que funcionase el consentimiento
const fieldsetBases = document.getElementById("fieldsetBases");

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
    formulario.reset(); // reseteamos os datos
    //eliminamos a clase is-invalid dos elementos que a teña
    let validTodos = document.querySelectorAll(".is-invalid");
    validTodos.forEach((element) => {
        element.classList.remove("is-invalid");
    });

    //eliminamos os p coa clase error
    let validErros = document.querySelectorAll("p.error");
    validErros.forEach((element) => {
        element.remove();
    })
    });



/*function validarCampos(){ De esta forma funciona de forma secuencial, solo pone el error al primero y al segundo cuando el primero no tiene error
    //return true; // Si esta en false, saldrá la alerta de: "Por favor, rechead todos os datos!!!
    return validarNome() &&  validarApelidos() && validarIdade() && validarCurso() &&
    validarCentro() && validarObservacions() && validarActividades() && validarConsentimiento();
} */

//NOVA FUNCION PARA VALIDAR CAMPOS
function validarCampos() {
    let validarNom = validarNome();
    let validarApe = validarApelidos();
    let validarIda = validarIdade();
    let validarCur = validarCurso();
    let validarCen = validarCentro();
    let validarObs = validarObservacions();
    let validarAct = validarActividades();
    let validarCon = validarConsentimento();


//devolvemos toas as variables
    return validarNom && validarApe && validarIda && validarCur  && validarCen &&
    validarObs && validarAct && validarCon;
}


function validarNome() {
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)*$/i; // Expresión regular que permite espacios y apóstrofes
    if (exReg.test(nome.value)) {
        nome.classList.remove("is-invalid");
        let validNome = nome.parentNode.querySelector("p");
        if (validNome) {
            validNome.remove();
        }
        return true;
    } else {
        nome.classList.add("is-invalid");
        let validNome = nome.parentNode.querySelector("p");
        if (!validNome) {
            validNome = document.createElement("p");
            validNome.setAttribute("class", "error");
            nome.parentNode.append(validNome); // Parent es para seleccionar el padre
            validNome.innerHTML = "O nome é incorrecto";
        }
        return false;
    }
}

function validarApelidos() {
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)+$/i; // Expresión regular que permite dos apellidos, con o sin espacio
    if (exReg.test(apelidos.value)) {
        apelidos.classList.remove("is-invalid");
        let validApelidos = apelidos.parentNode.querySelector("p");
        if (validApelidos) {
            validApelidos.remove();
        }
        return true;
    } else {
        apelidos.classList.add("is-invalid");
        let validApelidos = apelidos.parentNode.querySelector("p");
        if (!validApelidos) {
            validApelidos = document.createElement("p");
            validApelidos.setAttribute("class", "error");
            apelidos.parentNode.append(validApelidos); // Parent es para seleccionar el padre
            validApelidos.innerHTML = "Os apelidos son incorrectos";
        }
        return false;
    }
}



function validarIdade(){
    let exReg=/^[0-9]{1,2}$/;// {1,2} Edad que tenga 1 dígito o 2 dígitos
    if(exReg.test(idade.value)){
        idade.classList.remove("is-invalid");
        let validIdade = idade.parentNode.querySelector("p");
        if (validIdade) {
            validIdade.remove();
        }
        return true;
    } else {
        idade.classList.add("is-invalid");
        let validIdade = idade.parentNode.querySelector("p");
        if (!validIdade) {
            validIdade = document.createElement("p");
            validIdade.setAttribute("class", "error");
            idade.parentNode.append(validIdade); // Parent es para seleccionar el padre
            validIdade.innerHTML = "A idade e incorrecto";
        }
        return false;
    }
}


function validarCurso(){  //Revisar esto, esta no funcional
    if(curso.value !== "--"){
        curso.classList.remove("is-invalid");
        let validCurso = curso.parentNode.querySelector("p");
        if (validCurso) {
            validCurso.remove();
        }
        return true;
    } else {
        curso.classList.add("is-invalid");
        let validCurso = curso.parentNode.querySelector("p");
        if (!validCurso) {
            validCurso = document.createElement("p");
            validCurso.setAttribute("class", "error");
            curso.parentNode.append(validCurso); // Parent es para seleccionar el padre
            validCurso.innerHTML = "O curso e incorrecto";
        }
        return false;
    }
}

function validarCentro(){
   // return true;
   let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)*$/i; 
   if(exReg.test(centro.value)){
        centro.classList.remove("is-invalid");
        let validCentro = centro.parentNode.querySelector("p");
        if (validCentro) {
            validCentro.remove();
        }
        return true;
    } else {
        centro.classList.add("is-invalid");
        let validCentro = centro.parentNode.querySelector("p");
        if (!validCentro) {
            validCentro = document.createElement("p");
            validCentro.setAttribute("class", "error");
            centro.parentNode.append(validCentro); // Parent es para seleccionar el padre
            validCentro.innerHTML = "O centro e incorrecto";
        }
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
    for (let i =0; i < actividades.length; i++){
        if(actividades[i].checked){
            checkeado = true;
            break; // non é necesario que recorra todas para comprobar que hai algunha checked
        }
    }

    if(!checkeado){
        fieldsetActividades.classList.add("is-invalid");
        //actividades[0].closest("fieldset").classList.add("is-invalid");
        let validActivid = document.querySelector("#actividades-erro");
        if(!validActivid){
            validActivid = document.createElement("P");
            validActivid.setAttribute("id", "actividades-erro"); //se houbera outro p, o identificamos
            validActivid.setAttribute("class","error");
            validActivid.innerHTML = "Debes seleccionar alomenos unha actividades"
            fieldsetActividades.append(validActivid);
        }
        return false;
    } else{
        fieldsetActividades.classList.remove("is-invalid");
        let validActivid = document.querySelector("#actividades-erro");
        if(validActivid){
            validActivid.remove();
        }
        return true;
    }
}






function validarConsentimento(){
    let checkeado = false;
    for(let i = 0; i < consentimiento.length; i++){
        //console.log(consentimiento[i].checked)
        if(consentimiento[0].checked){
            checkeado = true;
        }
    }
    if(!checkeado){
        consentimiento[0].closest("fieldset").classList.add("is-invalid");
        let validCons = document.querySelector("#consentimiento-erro");
        if(!validCons){
            validCons = document.createElement("p");
            validCons.setAttribute("id", "consentimiento-erro");
            validCons.setAttribute("class", "error");
            validCons.innerHTML = "Debe aceptar o consentimiento";
            consentimiento[0].closest("div").append(validCons);
            //console.log(consentimiento[0].closest("div"));
        }
        return false;
    } else {
        consentimiento[0].closest("fieldset").classList.remove("is-invalid");
        let validCons = document.querySelector("#consentimiento-erro");
        if(validCons){
            validCons.remove();
        } 
        return true;
    }
 


}

