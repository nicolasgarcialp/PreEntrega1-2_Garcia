let hincha = prompt("De que equipo sos hincha?");
const VACIO = "";
const EQUIPO = "ESTUDIANTES";

if (hincha.toUpperCase() == EQUIPO){
    console.log("Podés ingresar al sitio libremente");
}
else if (hincha == VACIO){
    console.log("Debes ingresar una respuesta");
}
else{
    console.log("Debes respetar nuestras normas de privacidad y respeto para ingresar");
}

let pregunta = prompt("Veamos si conoces 7 banderas de Estudiantes. Queres jugar?");
const RESPUESTA = "SI";
const RESPNEG = "NO SE";
if (pregunta.toUpperCase() == RESPUESTA){
    let bandera = prompt("Ingresa el nombre de una bandera. En caso de no saber, ingresar NO SE");
    if (bandera.toUpperCase() == VACIO || bandera.toUpperCase() == RESPNEG){
        console.log("No conoces ninguna bandera");
    }
    if (bandera != VACIO && bandera.toUpperCase() != RESPNEG){
    for (let i = 0; i <= 7; i++) {
        bandera = prompt("Ingresa el nombre de una bandera. En caso de no saber, ingresar NO SE");
        console.log("Muy bien! Conoces " + i + " banderas");
        if (bandera.toUpperCase() == RESPNEG){
            break
        }
        else if (bandera.toUpperCase() == VACIO){
            break
        }
    }
}
}