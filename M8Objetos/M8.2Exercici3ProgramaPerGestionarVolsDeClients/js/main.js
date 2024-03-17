                                                                
                          //MÉTODOS DE CLIENTE
function agregarCliente(){
  let varDni = prompt("Indica el DNI del cliente del nuevo cliente");    
  let indice = clientes.findIndex((cliente) => cliente.dni == varDni); //Ponemos cliente en singular porque nos estamos inventando un hipotéticos cliente de la array de clientes que pueda tener el DNI y lo usamos para comprar.Así despues podemos saber el indice de donde esta
  console.log(indice);

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
    alert(clientes[indice]);   
  }
};

function eliminarCliente(){
  let varDni = prompt("Indica el DNI del cliente que quieres eliminar");
  let indice = clientes.findIndex((cliente) => cliente.dni == varDni);
  console.log(indice); 

  if(indice != -1){
    clientes.splice(indice, 1);
    alert("Cliente eliminado"); 
    console.table(clientes);   
  }
  else{
    alert("El cliente que ha indicado no existe");
  }
};
                   //MÉTODOS DE VUELO

function crearVuelo(){
  let varDni = prompt("Indica el Dni del cliente al que quieres agregar el vuelo:"); //Primero buscamos el cliente en el que queremos agregar el vuelo 
  let indice = clientes.findIndex((cliente) => cliente.dni == varDni);
  console.log(indice);

  if(indice == -1){
    alert("El cliente indicado no existe");
  }
  else{
    let varNumVuelo = prompt("Indica el número de vuelo que desea agregar:");                    
    let indiceVuelo = clientes[indice].vuelos.findIndex(vuelo => vuelo.numeroVuelo == varNumVuelo); //Me buscas en el cliente los vuelos y me devuelves el índice en el caso de que el vuelo exista y si no existe me devuelve un -1
    
    if(indiceVuelo == -1){
      alert("El vuelo no existe, por lo tanto, puedes añadir el vuelo");
      let varDistanciaKm = +prompt("Indica la distancia que recorrerá el vuelo");
      let varCompany = prompt("Indica la compañia del vuelo");
      let varNumPasajeros = +prompt("Indica cuántos pasajeros tiene el vuelo");
      let varNumMotores = parseInt(prompt("Indica cuántos motores tiene el vuelo"));  

      let nuevoVuelo = new Vuelo (varNumVuelo, varDistanciaKm, varCompany, varNumPasajeros, varNumMotores);
      clientes[indice].addVuelo(nuevoVuelo);
      alert("Vuelo añadido correctamente");
    }
    else{
      alert("Lo lamentamos, pero el vuelo ya existe.");
    }    
  }   
};

            //MÉTODOS GENERALES

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

function mediaEdad(){
  let mediaEdad = 0;
  let sumaEdad = 0;
  let mayoresEdad = clientes.filter(cliente => cliente.esMayorEdad() == true); //Uso filter y no map porque quiero un filtro de los que son mayores de edad
  mayoresEdad.forEach(mayorEdad => {
    sumaEdad +=  mayorEdad.edad;
  });
  mediaEdad = sumaEdad / mayoresEdad.length;
  console.log(mediaEdad);
};