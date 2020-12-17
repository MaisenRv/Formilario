const nombre = document.getElementById("nombre");
const materia = document.getElementById("materia");
const form = document.querySelector(".form");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let error = validar();
    if(error[0]){ 
        const e = document.querySelector(".error");
        let imagen = document.createElement("img");
        let mensaje = document.createElement("p");
        mensaje.innerHTML = error[1];
        imagen.src = "imagenes/error.jpg"; 
        imagen.classList.add("img");

        if(e.hasChildNodes()){
            while(e.hasChildNodes()){
                e.removeChild(e.firstChild);
            }
            e.appendChild(imagen);
            e.appendChild(mensaje);
        }
        else{
            e.appendChild(imagen);
            e.appendChild(mensaje);
        }
    }else{
        alert("correcto");
    }
})

const validar = ()=>{
    let err = [];
    let caracteres = nombre.value.length;
    if(caracteres < 5 || caracteres > 20){
        err[0] = true;
        err[1] = "El nombre no es valido debe tener mas de 5 caracteres y menos de 20";
        return err;
    }else if(materia.value.length < 4 || materia.value.length > 20){
        err[0] = true;
        err[1] = "materia invalidad";
        return err;
    }else {
        err[0] = false;
        return err;
    }

}
