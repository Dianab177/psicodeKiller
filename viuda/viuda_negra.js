function mostrarOcultarTablas(id){
    mostrado=0;
    elem = document.getElementById(id);
    if(elem.style.display=='block')mostrado=1;
    elem.style.display='none';
    if(mostrado!=1)elem.style.display='block';

    
}

function agregarUsuario() {
    let existe = false;
    for (i=0; i<pacientes.length; i++) {
        if (mascotaHTML.value == pacientes[i].mascota)
            existe = true;
    }
    if (existe == false) {
        var primerContacto = new claseVeterinaria( mascotaHTML.value, duenoHTML.value);
        pacientes.push(primerContacto);
        mascotaHTML.value = "";
        duenoHTML.value = "";
        
    }
    else{
        alert("Lo siento.La mascota ya existe");
    }
}