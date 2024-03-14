function main() {
  console.table(clientes);

  let cliente1 = new Cliente("44724193A", "18", "francesa", "15");
  //Pruebo los getters:
  alert(`DNI original: ${cliente1.getDNI()}`);
  alert(`Edad original: ${cliente1.getEdad()}`);
  alert(`Nacionalidad original: ${cliente1.getNacionalidad()}`);
  alert(`Número de vuelos original: ${cliente1.getVuelos()}`);
  //Pruebo los setters:
  cliente1.setDNI("89546327F");
  alert("DNI cambiado: " + cliente1.getDNI());
  cliente1.setEdad(84);
  alert("Edad cambiada: " + cliente1.getEdad());
  cliente1.setNacionalidad("senegalesa");
  alert("Nacionalidad cambiada: " + cliente1.getNacionalidad());
  cliente1.setVuelos(8946);
  alert("Número de vuelos cambiado: " + cliente1.getVuelos());
  //Pruebo el toString:
  alert(cliente1);
  //Pruebo método huellaCarbono
  let huellaCarbono = cliente1.huellaCarbono(cliente1.getVuelos());
  alert(
    "La huella de carbono de este cliente es de " + huellaCarbono + " CO2e"
  );
  
  //Pruebo getters, setters, toString y método propio desde array de objetos:
  console.log(`DNI original: ${clientes[1].getDNI()}`);
  console.log(`Edad original: ${clientes[1].getEdad()}`);
  console.log(`Nacionalidad original: ${clientes[1].getNacionalidad()}`);
  console.log(`Número de vuelos original: ${clientes[1].getVuelos()}`);

  clientes[1].setDNI("22654319P");
  console.log(`DNI cambiado: ${clientes[1].getDNI()}`);
  clientes[1].setEdad(56)
  console.log(`Edad cambiada: ${clientes[1].getEdad()}`);
  clientes[1].setNacionalidad("portuguesa");
  console.log(`Nacionalidad cambiada: ${clientes[1].getNacionalidad()}`);
  clientes[1].setVuelos(465);
  console.log(`Número de vuelos cambiado: ${clientes[1].getVuelos()}`);
  console.log(clientes[1]);
  console.log("La huella de carbono de este cliente es de " + clientes[1].huellaCarbono(clientes[1].getVuelos()) + " CO2e");
}