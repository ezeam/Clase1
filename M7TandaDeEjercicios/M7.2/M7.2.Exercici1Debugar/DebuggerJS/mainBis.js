function intrpducirNumero() {  //Esta función es llamada por el botón "try it". Debería ser más descriptiva, podría llamarse "solicitarNúmero()"
    let primo = false; // Las variables se declaran con let, no con var. 
    let numero = prompt("Escoge un número: "); //Las variables tienen que ser descriptivas. Ésta podría llamarse numeroUsuario
    if (numero > 1) {  //Si el número es mayor a uno,  
        primo = esPrimo(numero); //la variable p será el resultado de la función ep.
    }
    alert((primo)? "El número es primo" : "El número no es primo"); // Printeamos p pero es muy confuso para el usuario ya que ve true o false, pero no se puede interpretar.  
}


function esPrimo(num) { //No se puede deducir qué hace la función por el nombre.
    let primo = true; //cambia el valor de p a true. Es un boolean que cambia según el número es primo o no. Yo la hubiese llamado "esPrimo"
    let i = 2;
    while (num && i < num) { // Para que se entienda mejor debería ser: (p==true && i<n)
        if (num % i == 0) { // Si modulo de n entre i es 0
            primo = false; //Pones p a false y así sales del bucle while. Hubiese sido más sencillo con un for
        }
        i++; //Sumas 1 a la variable i
    }
    return primo; //Devuelves p al main y alli se printea si el número es primo o no

    // Lo que hace el programa es  comprobar si un número es primo de la siguiente manera: itera la divisón del número entre el contador
    // y si encuentra modulos 0 entre los resultados, el número no es primo, por lo que p pasa a false.  
}

//CALCULA SI EL NÚMERO ES PRIMO!