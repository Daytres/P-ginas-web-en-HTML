const formulario = document.querySelector("form");
const dni = document.getElementById("dni");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const fillos = document.getElementById("fillos");



const boton = document.querySelector("button");


boton.addEventListener("click", function (evento){ //en el otro ejercicio tengo formulario en vez de boton y no tengo click. Tengo submit
    evento.preventDefault(); //Se hace para prevenir que se envie solo

    if (validarCampos()){ //Este validarCampos depende de la función validarCampos de abajo
        if(confirm("¿Quieres enviar este formulario?")){ // Devolve un true o un false
            formulario.submit();
        }else{
            alert("Formulario cancelado");
        }
    }else{
        alert("Rellene correctamente el formulario"); //Me sale esta alerta ahora que no tengo nada
    }
}

);

/* Función para validar campos, let validaDNI(Esto es la variable) = validarDNI()(Esto es el método), da error si pones el nombre igual   */
function validarCampos (){
    let validaDNI = validarDNI();
    let validaNome = validarNome();
    let validIdade = validarIdade();
    let validFillos = validarFillos();



/* Devuelve las variables */
return validaDNI && validaNome && validIdade && validFillos;
}

function validarDNI() {
    let exReg = /^[0-9]{8}[A-Za-z]$]/; // Expresión regular para DNI
    if (exReg.test(dni.value)) {
        dni.classList.remove("is-invalid");
        let validDNI = dni.parentNode.querySelector("p");
        if (validDNI) {
            validDNI.remove();
        }
        return true;
    } else {
        dni.classList.add("is-invalid");
        let validDNI = dni.parentNode.querySelector("p");
        if (!validDNI) {
            validDNI = document.createElement("p");
            validDNI.setAttribute("class", "error");
            caixaMensaxes.append(validDNI);
            validDNI.innerHTML = "Tienes que poner un DNI válido";
        }
        return false;
    }
}

function validarNome() {
    let exReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s'][A-ZÁÉÍÓÚÜÑ]+)*$/i; //, \s es un espacio la "i" del final es para hacer insensible a la minus y mayús
    if(exReg.test(nome.value)) {
        nome.classList.remove("is-invalid");
        let validNome = nome.parentNode.querySelector("p");
        if (validNome){
            validNome.remove();
        }
        return true;
    }else{
        nome.classList.add("is-invalid");
        let validNome = nome.parentNode.querySelector("p");
        if (!validNome){
            validNome = document.createElement("p");
            validNome.setAttribute("class", "error");
            caixaMensaxes.append(validNome);
            validNome.innerHTML = "Pusiste mal tu nombre, aprende a escribir bien porfa"
        }
        return false;

    }
}



function validarIdade () {
    let fechaNacimiento = new Date(idade.value);  // Obtenemos la fecha seleccionada por el usuario
    //console.log(fechaNacimiento)
    let hoy = new Date() // Fecha actual
    //console.log(hoy)
  // Restamos 18 años a la fecha de hoy para calcular la fecha límite
   let mayorEdad = hoy.setFullYear(hoy.getFullYear() - 18);
//    console.log("hoy" + hoy)
//    console.log(hoy.getFullYear())
//    console.log(hoy.getFullYear() - 18)
//    console.log(mayorEdad);
   //let data = new Date(mayorEdad);
   //console.log(data);

        // Comparamos la fecha de nacimiento con la fecha límite de 18 años
        if (fechaNacimiento < mayorEdad) {
            // Si la fecha de nacimiento es mayor que la fecha límite, es menor de edad
            idade.classList.remove("is-invalid");
            let validIdade = idade.parentNode.querySelector("p");
            if (validIdade){
                validIdade.remove();
            }
        return true;
    }else{
        idade.classList.add("is-invalid");
        let validIdade = idade.parentNode.querySelector("p");
        if (!validIdade){
            validIdade = document.createElement("p");
            validIdade.setAttribute("class", "error");
            caixaMensaxes.append(validIdade);
            validIdade.innerHTML = "No queremos a menores de edad en esta discoteca, pirrate "
        }
        return false;

    }
}

   /* function validarFillos(){
        if( fillos < 20)
            fillos.classList.remove("is-invalid");
            let validFillos = fillos.parentNode.querySelector("p");
            if(validFillos){
                validFillos.remove();
            }
        return true;
    }else{
        fillos.classList.add("is-invalid");
        let validIdade = fillos.parentNode.querySelector("p");
        if (!validIdade){
            validIdade = document.createElement("")
        }
    } */