function buscar(valor){
  let encontrado = false; //La hipotesis es que la foto que buscamos no existe
  let indice = -1; // Igualamos a -1 porque asumimos que no lo encuentra
  let i = 0;
  let vueltas = imagenes.length;

  while(i < vueltas && !encontrado){ //Mientras no te acabes la array y no encuentres la foto haces el bucle. Saldrás en el momento en el que acabes el bucle o encuentres lo que buscas
    if(valor == imagenes[i].nombre){ //Si el valor que nos pasan coincide con el nombre de alguna de las fotos que tenemos
      indice = i; //El índice será la posición de la array donde lo hemos encontrado
      encontrado = true; //Y el booleano pasará a ser cierto
    }
    i++;//Controla las iteraciones en el bucle
  }
  return indice; //Devolvemos la posición de la array donde la hemos encontrado
};


function agregar(){
  let varNombre = prompt("Indica el nombre de la imagen que quieres agregar");
  let indice = buscar(varNombre);

  if(indice < 0){
    let varImagen = prompt("Indica el nombre de la imagen jpg (sin extensión): ") + ".jpg";
    let varTitulo = prompt("Indica el tip de la imagen: ");
    let varDescripcion = prompt("Escribe una breve descripción");

    // new Imagen (varImagen, nombreImagenModificar, varTitulo, varDescripcion); -->Creamos un objeto a través del constructor
    const imagen2 = {
      imagen : varImagen,
      nombre : varNombre, 
      titulo : varTitulo,
      descripcion : varDescripcion
    }
    imagenes.push(imagen2);
    alert("Imagen agregada");
    posicion = imagenes.length -1;
    mostrarImagen(); 
  }
  else{
    alert("La imagen ya existe. No es posible añadirla de nuevo");
    posicion = indice; 
    mostrarImagen();
  }
};


function mostrar(){
  let nombreImagenMostrar = prompt("Indica el nombre de la imagen que quieres mostrar");
  let indice = buscar(nombreImagenMostrar);

  if (indice != -1){
    posicion = indice;
    console.log("posicion: ", posicion)
    mostrarImagen();
  }
  else{
    alert("La imagen indicada no existe");
  }
};


function eliminar(){
  let nombreImagenEliminar = prompt("Indica el nombre de la imagen que quieres eliminar");
  let indice = buscar(nombreImagenEliminar);

  if(indice != -1){
    imagenes.splice(indice, 1);
    alert("Imagen eliminada");
    avanzar();
  }
  else{
    alert("La imagen indicada no existe");
  }
};


function modificar(){
  let nombreImagenModificar = prompt("Indica el nombre de la imagen que quieres modificar");
  let indice = buscar(nombreImagenModificar);

  if (indice != -1){
    let varImagen = prompt("Indica el nombre de la imagen jpg (sin extensión): ") + ".jpg";
    let varTitulo = prompt("Indica el tip de la imagen: ");
    let varDescripcion = prompt("Escribe una breve descripción");

    const imagen2 = {
      imagen : varImagen,
      nombre : nombreImagenModificar, 
      titulo : varTitulo,
      descripcion : varDescripcion
    }
    imagenes.splice(indice, 1, imagen2);
    alert("La imagen ha sido modificada");
    mostrarImagen();

  }
  else{
    alert("La imagen indicada no existe");
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