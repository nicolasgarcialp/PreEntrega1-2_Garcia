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

function preguntas(){
    let bandera = prompt("Ingresa el nombre de una bandera. En caso de no saber, ingresar NO SE");
    if (bandera.toUpperCase() == VACIO || bandera.toUpperCase() == RESPNEG){
        console.log("No conoces ninguna bandera");
    }
    else if (bandera != VACIO && bandera.toUpperCase() != RESPNEG){
    for (let i = 1; i <= 7; i++) {
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

if (pregunta.toUpperCase() == RESPUESTA){
    preguntas();
}

//Inclusión de objetos y arrays.


class Bandera {
    constructor(name, age, trips, meters) {
      this.name = name;
      this.age = age;
      this.trips = trips;
      this.meters = meters;
    }
}

let banderas = [
    new Bandera ("Seba", 26, 85, 5),
    new Bandera ("Mondongo", 32, 32, 7),
    new Bandera ("Los Hornos", 18, 43, 13),
    new Bandera ("Gonnet", 18, 19, 6),
    new Bandera ("La Loma", 14, 26, 5),
    new Bandera ("Basso", 15, 17, 4),
    new Bandera ("Los Salvioli", 19, 14, 8)
  ];

  //Mostrar arrray de banderas
  const showBanderas = (bandera) => {
    console.clear();
    console.log("Banderas registradas en el sistema");
    banderas.forEach( bandera => console.log(bandera));
};
    
//Agregar una bandera
const addBandera = () => {
    let name = prompt("Ingresa el nombre de la bandera que queres agregar");
    let age = prompt("Ingresa la edad de la bandera que queres agregar");
    let trips = prompt("Ingresa la cantidad de viajes de la bandera que queres agregar");
    let meters = prompt("Ingresa la longitud en metros de la bandera que queres agregar");

    let bandera = new Bandera(name, age, trips, meters);

    banderas.push(bandera);
    showBanderas(banderas);
}

  
    //Eliminar una bandera

    const banderaOrNot = () => {
        
        let banderaName = prompt("Ingresa el nombre de la bandera que queres eliminar");
      
        let indiceExists = banderas.findIndex(
          (bandera) => bandera.name.toLowerCase() === banderaName.toLowerCase()
        );
      
        if (indiceExists === -1) {
          return alert(`La bandera con el nombre ${banderaName} no está en los registros`);
        }
      
        return banderas[indiceExists];
      };
      

    let deleteBandera = () => {
  
        let searchBandera = banderaOrNot()
        
        if(!searchBandera) return
        const confirmation = confirm (`Estas seguro de eliminar a ${searchBandera.name} ?`)

        if(confirmation) {
          banderas = banderas.filter( bandera => bandera.name.toLowerCase() !== searchBandera.name.toLowerCase()); 
          alert("Se ha eliminado la bandera de nuestros registros");
          showBanderas(banderas);
        } else {
          alert("No se ha eliminado la bandera de nuestros registros")
        }
      }

      let searchYourBandera = () => {
        let yourBandera = prompt ("Ingresa el nombre de la bandera que queres buscar");
        let indiceExists = banderas.findIndex(
            (bandera) => bandera.name.toLowerCase() === yourBandera.toLowerCase()
          );
        if (!banderaOrNot){
            alert("La bandera ingresada no está en los registros");
        }else{
            console.log("La bandera fue encontrada en los registros. Su informacion es:");
            console.log(banderas[indiceExists]);
        }

      }
      
      //Menu de opciones con switch
      let turnOn = true;

      while (turnOn) {
        alert("Menú: \n1 - Agregar una bandera\n2 - Eliminar una bandera\n3 - Buscar una bandera\n4 - Apagar");
        let chooseOption = parseInt(prompt("Ingrese una opción"));
      
        switch (chooseOption) {
          case 1:
            addBandera();
            break;
          case 2:
            deleteBandera();
            break;
          case 3:
            searchYourBandera();
            break;
          case 4:
            turnOn = false;
            break;
          default:
            alert("Ingrese un numero entre el 1 y el 4");
        }
      }
      