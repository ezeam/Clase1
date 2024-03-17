class Vuelo{
  static tons = 0.1;
  //Atributos
  numeroVuelo;
  distanciaKm;
  company;
  numPasajeros;
  numMotores;

  //Constructor
  constructor(numeroVuelo, distanciaKm, company, numPasajeros, numMotores){
    this.numeroVuelo = numeroVuelo;
    this.distanciaKm = distanciaKm;
    this.company = company;
    this.numPasajeros = numPasajeros;
    this.numMotores = numMotores;
  }

  //Getters
  getNumeroVuelo(){
    return this.numeroVuelo;
  }
  getDistanciaKm(){
    return this.distanciaKm;
  }
  getCompany(){
    return this.company;
  }
  getNumPasajeros(){
    return this.numPasajeros;
  }
  getNumMotores(){
    return this.numMotores;
  }

  //Setters
  setNumeroVuelo(numeroVuelo){
    return this.numeroVuelo = numeroVuelo;
  }
  setDistanciaKm(distanciaKm){
    return this.distanciaKm = distanciaKm;
  }
  setCompany(company){
    return this.company = company;
  }
  setNumPasajeros(numPasajeros){
    return this.numPasajeros = numPasajeros;
  }
  setNumMotores(numMotores){
    return this.numMotores = this.numMotores;
  }

  //Métodos propios
  toString(){
    return `Número de vuelo: ${this.numeroVuelo}
    Distancia(Km): ${this.distanciaKm}
    Comapañía: ${this.company}
    Número de pasajeros: ${this.numPasajeros}
    Número de motores: ${this.numMotores}`;  
  }
  
  //Métodos generales
  calculaHuellaCarbono(){
    let huella = Math.round(((this.numMotores*Vuelo.tons * this.distanciaKm)) * 100) / 100;
    return huella;
  } 

}