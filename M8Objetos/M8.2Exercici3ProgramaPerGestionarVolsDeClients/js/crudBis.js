const clientes = [
  new Cliente ( "44724193A", "Margarita", "López", "española", 45), //0
  new Cliente ( "55632589P", "James", "Pitt", "amerericana", 9) //1
];

function buscar(valor){
  let encontrado = false; //La hipotesis es que la foto que buscamos no existe
  let indice = -1; // Igualamos a -1 porque asumimos que no lo encuentra
  let i = 0;
  let vueltas = clientes.length;

  while(i < vueltas && !encontrado){ //Mientras no te acabes la array y no encuentres la foto haces el bucle. Saldrás en el momento en el que acabes el bucle o encuentres lo que buscas
    if(valor == clientes[i].dni){ //Si el valor que nos pasan coincide con el nombre de alguna de las fotos que tenemos
      indice = i; //El índice será la posición de la array donde lo hemos encontrado
      encontrado = true; //Y el booleano pasará a ser cierto
      console.log("Encontrado");
    }
    i++;//Controla las iteraciones en el bucle
  }
  return indice; //Devolvemos la posición de la array donde la hemos encontrado
};


function agregar(){
  let varDni = prompt("Indica el DNI del cliente del nuevo cliente", "44724193A");
  const dniEsIgual = (cliente) => cliente.dni == varDni;  //Ponemos cliente en singular porque nos estamos inventando un hipotéticos cliente de la array de clientes que pueda tener el DNI y lo usamos para comprar.Así despues podemos saber el indice de donde esta
  let indice = clientes.findIndex(dniEsIgual);
  console.log(indice);
  
 // let indice = buscar(varDni);

  if(indice == -1){
    let varNombre = prompt("Indica el nombre del nuevo cliente");
    let varApellido = prompt("Indica el apellido del nuevo cliente");
    let varNacionalidad = prompt("Indica la nacionalidad del nuevo cliente");
    let varEdad = parseInt(prompt("Indica la edad del nuevo cliente"));
    
    let clienteAdd = new Cliente (varDni, varNombre, varApellido, varNacionalidad, varEdad);
  
    clientes.push(clienteAdd);
    alert("Cliente añadido correctamente"); 
    console.table(clientes);       
  }
  else{
    alert("El cliente que intenta añadir ya existe en el sistema."); 
    prompt(clientes[indice]);   
  }
};


function mostrar(){
  let varNVuelo = +prompt("Indica el número de vuelo que desea consultar:");
  let indice = buscar(varNVuelo);
  

  if (indice !== -1){
    console.log("Vuelos indice: ", vuelos[indice]);     ;
    document.getElementById("resultado").innerHTML = vuelos[indice];
  }

  else{
    alert("El vuelo que busca no existe");
  }
};


function eliminar(){
  let varDni = prompt("Indica el DNI del cliente que quieres eliminar");
  const dniEsIgual = (cliente) => cliente.dni == varDni;  //Ponemos cliente en singular porque nos estamos inventando un hipotéticos cliente de la array de clientes que pueda tener el DNI y lo usamos para comprar.Así despues podemos saber el indice de donde esta
  let indice = clientes.findIndex(dniEsIgual);
  console.log(indice);
  //let indice = buscar(varDni);

  if(indice != -1){
    clientes.splice(indice, 1);
    alert("Cliente eliminado"); 
    console.table(clientes);   
  }
  else{
    alert("El cliente que ha indicado no existe");
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

    let vueloAniadido = new Vuelo (varNvuelo, varDistancia, varCompany, varNPasajeros, varNMotores);

    vuelos.splice(indice, 1, vueloAniadido);
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