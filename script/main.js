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
class banderas{
    constructor (nombre, anio, viajes, duenio){
    this.nombre = nombre;
    this.anio = anio;
    this.viajes = viajes;
    this.duenio = duenio;
}
}
let misBanderas = [
new banderas("SEBA", "1997", "60", "Sebastian"),
new banderas("MONDONGO", "1989", "40", "Ariel"),
new banderas("LOS HORNOS", "2004", "50", "Agustin"),
new banderas("LA LOMA", "2007", "30", "Sebastian"),
new banderas("23 Y 68", "1985", "25", "Marcelo"),
];

function informacion(nuevabandera){
    for (const propiedad in nuevabandera) {
        console.log("El dato "+ propiedad +" es " + nuevabandera [propiedad]);
    }
}

let datos = prompt("Sobre que bandera quieres obtener datos?");
if (datos==misBanderas[0].nombre) {
    console.log(informacion(misBanderas[0]));
}
if (datos==misBanderas[1].nombre) {
    console.log(informacion(misBanderas[1]));
}
if (datos==misBanderas[2].nombre) {
    console.log(informacion(misBanderas[2]));
}
if (datos==misBanderas[3].nombre) {
    console.log(informacion(misBanderas[3]));
}
if (datos==misBanderas[4].nombre) {
    console.log(informacion(misBanderas[4]));
}
let nuevoTrapo = {
nombre: "nombre",
anio: "anio",
viajes: "viajes",
duenio: "duenio",
}
function agregarBandera(nombre, anio, viajes, duenio){
nuevoTrapo.nombre = prompt("Cual es el nombre de la nueva bandera?");
nuevoTrapo.anio = parseInt(prompt("Cual es el año de creacion de la nueva bandera?"));
nuevoTrapo.viajes = parseInt(prompt("Cual es la cantidad de viajes de la nueva bandera?"));
nuevoTrapo.duenio = prompt("Cual es el nombre del dueño de la nueva bandera?");
misBanderas.push (nuevoTrapo);
}
let preguntaNuevaBandera = prompt("Quieres agregar tu bandera al registro? SI/NO")
if (preguntaNuevaBandera.toUpperCase() == RESPUESTA ){
        agregarBandera();
        console.log(misBanderas);
    }
let preguntaBusqueda = prompt("Quieres buscar una bandera en el registro?")
if (preguntaBusqueda.toLocaleUpperCase() == "SI") {
    let preguntaBandera = prompt("Cual es el nombre de la bandera que queres buscar?")
    let existe = (misBanderas.some((banderas) => banderas.nombre == preguntaBandera.toUpperCase()));
    if (existe) {
        console.log (existe + ", la bandera fue encontrada en el registro");
    }
    if (existe == false) {
        console.log("La bandera no fue encontrada");
    }
}



