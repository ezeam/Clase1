class Vuelo{

  static tons = 0.1;

  constructor(nVuelo, distancia, company, nPasajeros, nMotores){
    this.nVuelo = nVuelo, //Este será la clave para encontrarlo
    this.distancia = distancia,    
    this.company = company,
    this.nPasajeros = nPasajeros,
    this.nMotores = nMotores
  }

  getNVuelo(){
    return this.nVuelo;
  }
  getDistancia() {
    return this.distancia;  }
  
  getCompany(){
    return this.company;
  }
  getNPasajeros(){
    return this.nPasajeros;
  }
  getNMotores(){
    return this.nMotores;
  } 
  setNVuelo(nVuelo){
    return this.nVuelo = nVuelo;
  }
  setDistancia(distancia){
    return this.distancia = distancia;
  } 
  setCompany(company){
    return this.company = company;
  }
  setNPasajeros(nPasajeros){
    return this.nPasajeros = nPasajeros;
  }
  setNMotores(nMotores){
    return this.nMotores = nMotores;
  }

  calculaHuellaCarbono(){
    let huella = ((this.nMotores*Vuelo.tons) * this.distancia).toFixed(2);
    return huella;
  }

  toString() { 
    return `<br>Nº de vuelo: ${this.nVuelo}
    <br>Distancia: ${this.distancia}
    <br>Compañía: ${this.company}
    <br>Número de pasajeros: ${this.nPasajeros}
    <br>Número de motores: ${this.nMotores}
    <br>Huella de carbono ${this.calculaHuellaCarbono()}`; 
      }
}