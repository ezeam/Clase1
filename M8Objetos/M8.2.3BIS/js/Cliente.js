class Cliente{
  //Atributos
  dni;
  nombre;
  apellido;
  nacionalidad;
  edad;

  //Constructor
  constructor(dni, nombre, apellido, nacionalidad, edad){
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacionalidad = nacionalidad;
    this.edad = edad;
    this.vuelos = [];
  }

  //Getters
  getDni(){
    return this.dni;
  }
  getNombre(){
    return this.nombre;
  }
  getApellido(){
    return this.apellido;
  }
  getNacionalidad(){
    return this.nacionalidad;
  }
  getEdad(){
    return this.edad;
  }

  //Setters
  setDNI(dni){
    return this.dni = dni;
  }
  setNombre(nombre){
    return this.nombre = nombre;
  }
  setApellido(apellido){
    return this.apellido = apellido;
  }
  setNacionalidad(nacionalidad){
    return this.nacionalidad = nacionalidad;
  }
  setEdad(edad){
    return this.nacionalidad = this.nacionalidad;
  }

  //Métodos propios
  toString(){
    return `DNI: ${this.dni}
    Nombre: ${this.nombre}
    Apellido: ${this.apellido}
    Nacionalidad: ${this.nacionalidad}
    Edad: ${this.edad}`;  
  }
  
  //Métodos generales
  esMayorEdad(){
    let mayorEdad = false;
    if(this.edad>= 18){
      mayorEdad = true;
    }
    return mayorEdad;
  }

  addVuelo(vuelo){  //CUANDO LLAMEMOS A ESTE MÉTODO NOS METERÁ UN VUELO EN LA ARRAY DE VUELOS DEL CLIENTE
    this.vuelos.push(vuelo);
  }
}
