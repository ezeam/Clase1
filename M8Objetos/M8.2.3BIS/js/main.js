                                                                
                          //MÉTODOS DE CLIENTE
function agregarCliente(){
  let varDni = prompt("Indica el DNI del cliente del nuevo cliente");    
  let indice = clientes.findIndex((cliente) => cliente.dni == varDni); //Ponemos cliente en singular porque nos estamos inventando un hipotéticos cliente de la array de clientes que pueda tener el DNI y lo usamos para comprar.Así despues podemos saber el indice de donde esta
  //console.log(indice);

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
  let varDni = prompt("Indica el Dni del cliente al que quieres agregar el vuelo:", "44724193A"); //Primero buscamos el cliente en el que queremos agregar el vuelo 
  let indice = clientes.findIndex((cliente) => cliente.dni == varDni);
  console.log(indice);

  if(indice == -1){
    alert("El cliente indicado no existe");
  }
  else{
    let varNumVuelo = prompt("Indica el número de vuelo que desea agregar:", 4632);                    
    let indiceVuelo = clientes[indice].vuelos.findIndex(vuelo => vuelo.numeroVuelo == varNumVuelo); //Me buscas en el cliente los vuelos y me devuelves el índice en el caso de que el vuelo exista y si no existe me devuelve un -1
    
    if(indiceVuelo == -1){
      alert("El vuelo no existe, puedes añadir el vuelo");
      let varDistanciaKm = +prompt("Indica la distancia que recorrerá el vuelo", 4632);
      let varCompany = prompt("Indica la compañia del vuelo", "laquesea");
      let varNumPasajeros = +prompt("Indica cuántos pasajeros tiene el vuelo", 4632);
      let varNumMotores = parseInt(prompt("Indica cuántos motores tiene el vuelo", 4));  

      let nuevoVuelo = new Vuelo (varNumVuelo, varDistanciaKm, varCompany, varNumPasajeros, varNumMotores);
      clientes[indice].addVuelo(nuevoVuelo);
      alert("Vuelo añadido correctamente");
     // console.log(("Vuelo añadido en la array de objetos del cliente con DNI: " + varDni));
     // console.table(clientes);
     // console.log(clientes[indice].vuelos); //Quiero imprimir el número de vuelo pero no puedo acceder a él. 
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
  let mayoresEdad = clientes.filter(cliente => cliente.esMayorEdad() == true); //Me devuelve un array con todos los clientes esMayorEdad() es cierto
  mayoresEdad.forEach(mayorEdad => {                                           //Para cada uno de los elementos en la array mayoresEdad
    sumaEdad +=  mayorEdad.edad;                                               //Me sumas las edades y me las acumulas en sumaEdad
  });
  mediaEdad = sumaEdad / mayoresEdad.length;                                   //Aquí calculamos la suma de todas las edades mayores de edad y las dividimos entre el número de edades que hay en la array mayoresEdad
  alert("La media de edad de los clientes mayores de edad es: " + mediaEdad);
};

function huellaCarbonoCliente(){
  let varDni = prompt("Indica el Dni del cliente acerca del cual desea conocer la huella de carbono:");
  let indice = clientes.findIndex((cliente) => cliente.dni == varDni);
  console.log(indice);
  if(indice == -1){
    alert("El cliente indicado no existe.");
  }
  else{
    let sumaCO2 = 0;
    clientes[indice].vuelos.forEach(vuelo => {
        sumaCO2 += vuelo.calculaHuellaCarbono();
    });
    console.log("Acumulador: ", sumaCO2);
    
  }
}

function mediaHuellaCarbono(){
  let mediaHuellaCarbono = 0;
  let sumaHuellaCarbono = 0;
  let todosVuelosClientes = [];

  clientes.forEach(cliente =>{    //Primero itero sobre los clientes
    cliente.vuelos.forEach(vuelo => {   //Ahora itero sobre los vuelos de cada uno de los clientes
      todosVuelosClientes.push(vuelo);  // Y aqui meto cada uno de los vuelos que encuentra de cada cliente en el array vacío 
    });
  });
  console.log("Todos vuelos clientes: ", todosVuelosClientes);

  todosVuelosClientes.forEach(vuelo => {   // Itero sobre el nuevo array donde hay objetos vuelo
    sumaHuellaCarbono += vuelo.calculaHuellaCarbono();  // Sumo cada uno de los valores que devuelve el método propio que calcula la huella de carbono
  });
  console.log("Suma huella carbono: ", sumaHuellaCarbono);
  mediaHuellaCarbono = sumaHuellaCarbono/ todosVuelosClientes.length;
  alert("La media de la huella de carbono de todos los clientes es : " + mediaHuellaCarbono);
}

//calculaHuellaCarbono()