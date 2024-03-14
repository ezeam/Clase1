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
  setApellido(apellido)
  //Métodos propios
  //Métodos generales
}