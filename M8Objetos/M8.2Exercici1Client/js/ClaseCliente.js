class Cliente {
  constructor(DNI, edad, nacionalidad, numeroVuelos){
    this.DNI = DNI;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
    this.numeroVuelos = numeroVuelos;
  }

  getDNI() {
    return this.DNI;
  }

  getEdad(){
    return this.edad;
  }

  getNacionalidad(){
    return this.nacionalidad;
  }

  getVuelos(){
    return this.numeroVuelos;
  }

  setDNI(DNI){
    return this.DNI = DNI;
  }

  setEdad(edad) {
    return this.edad = edad;
  }

  setNacionalidad(nacionalidad){
    return this.nacionalidad = nacionalidad;
  }

  setVuelos(numeroVuelos){
    return this.numeroVuelos = numeroVuelos;
  }

  huellaCarbono(vuelos){
    let huella = vuelos * 0.5;
    return huella;
  }

  toString(){
    let retorno = "DNI: " + this.DNI + " //Edad: " + this.edad + " //Nacionalidad: " + this.nacionalidad + " //Número de vuelos: " + this.numeroVuelos;
    return retorno;
  }
};


