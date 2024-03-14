//ESTÁ MAL PORQUE EN AGREGAR CREO UN OBJETO LITERAL Y AL NO USAR LA CLASE, ME CREA UN OBJETO QUE NO 
//ES DE CLASE, POR LO TANTO NO PUEDE ACCEDER AL TOSTRING


const vuelos = [
  new Vuelo ( 1, 156, "Iberia", 456, 4), //0
  new Vuelo ( 2, 157, "Vueling", 4, 2) //1
];

function buscar(valor){
  let encontrado = false; //La hipotesis es que la foto que buscamos no existe
  let indice = -1; // Igualamos a -1 porque asumimos que no lo encuentra
  let i = 0;
  let vueltas = vuelos.length;

  while(i < vueltas && !encontrado){ //Mientras no te acabes la array y no encuentres la foto haces el bucle. Saldrás en el momento en el que acabes el bucle o encuentres lo que buscas
    if(valor == vuelos[i].nVuelo){ //Si el valor que nos pasan coincide con el nombre de alguna de las fotos que tenemos
      indice = i; //El índice será la posición de la array donde lo hemos encontrado
      encontrado = true; //Y el booleano pasará a ser cierto
      console.log("Encontrado");
    }
    i++;//Controla las iteraciones en el bucle
  }
  return indice; //Devolvemos la posición de la array donde la hemos encontrado
};


function agregar(){
  let varNVuelo = parseInt(prompt("Indica el número de vuelo que quieres agregar"));
  let indice = buscar(varNVuelo);

  if(indice < 0){
    let varDistancia = parseInt(prompt("Indica la distancia que recorrerá el vuelo"));
    let varCompany = prompt("Indica el nombre de la Compañía: ");
    let varNPasajeros = parseInt(prompt("Escribe el número de pasajeros:"));
    let varNMotores = parseInt(prompt("Escribe el número motores del avión:"));
    
    let vueloAniadido = {
      nVuelo : varNVuelo,
      distancia : varDistancia, 
      company : varCompany,
      nPasajeros : varNPasajeros,
      nMotores : varNMotores
    }
    vuelos.push(vueloAniadido);
    alert("Vuelo añadido correctamente"); 
    console.table(vuelos);   
    alert(vueloAniadido); 
  }
  else{
    alert("El vuelo que intenta añadir ya existe en el sistema.");    
  }
};


function mostrar(){
  let varNVuelo = +prompt("Indica el número de vuelo que desea consultar:");
  let indice = buscar(varNVuelo);
  let vueloImprimir = {};

  if (indice !== -1){
    console.log("Entras?");
    console.log("Indice: ", indice); 
    console.log("Vuelos indice: ", vuelos[indice]);
    vueloImprimir = vuelos[indice];
    document.getElementById("resultado").innerHTML = `${vueloImprimir}`;
     //  No funciona el método toString en los vuelos agregados
     alert(vueloImprimir);
  }

  else{
    alert("El vuelo que busca no existe");
  }
};


function eliminar(){
  let varNvuelo = +prompt("Indica el nombre de la imagen que quieres eliminar");
  let indice = buscar(varNvuelo);

  if(indice != -1){
    vuelos.splice(indice, 1);
    alert("Vuelo eliminado"); 
    console.table(vuelos);   
  }
  else{
    alert("El vuelo que ha indicado no existe");
  }
};


function modificar(){
  let varNvuelo = parseInt(prompt("Indica el número de vuelo que quieres modificar"));
  let indice = buscar(varNvuelo);

  if (indice != -1){
    let varDistancia = parseInt(prompt("Indica la distancia que recorrerá el vuelo"));    
    let varCompany = prompt("Indica el nombre de la Compañía: ");
    let varNPasajeros = parseInt(prompt("Escribe el número de pasajeros:"));
    let varNMotores = parseInt(prompt("Escribe el número motores del avión:"));

    const vueloAñadido = {
      nVuelo : varNvuelo,
      distancia : varDistancia, 
      company : varCompany,
      nPasajeros : varNPasajeros,
      nMotores : varNMotores
    }
    vuelos.splice(indice, 1, vueloAñadido);
    alert("El vuelo ha sido modificado");
    console.table(vuelos);
    }
  else{
    alert("El vuelo indicado no existe");
  }
};

function salir(){
  let salimos = prompt("¿Desea salir de la aplicación? (S-si // N-no)");
  if(salimos.toUpperCase() == "S"){
    alert("Hasta pronto");
    window.close();
  }
  else if(salimos.toUpperCase() == "N"){
    alert("Nos alegra que te quedes con nosotros");
  }
  else{
    alert("No hemos entendido su respuesta");
  }
}