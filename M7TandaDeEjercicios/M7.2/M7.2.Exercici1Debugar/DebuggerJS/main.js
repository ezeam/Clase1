function ip() {  //Esta función es llamada por el botón "try it". Debería ser más descriptiva, podría llamarse "solicitarNúmero()"
    var p = false; // Las variables se declaran con let, no con var. 
    var n = prompt("Escoge un número: "); //Las variables tienen que ser descriptivas. Ésta podría llamarse numeroUsuario
    if (n > 1) {  //Si el número es mayor a uno,  
        p = ep(n); //la variable p será el resultado de la función ep.
    }
    alert(p); // Printeamos p pero es muy confuso para el usuario ya que ve true o false, pero no se puede interpretar.  
}


function ep(n) { //No se puede deducir qué hace la función por el nombre.
    let p = true; //cambia el valor de p a true. Es un boolean que cambia según el número es primo o no. Yo la hubiese llamado "esPrimo"
    let i = 2;
    while (p && i < n) { // Para que se entienda mejor debería ser: (p==true && i<n)
        if (n % i == 0) { // Si modulo de n entre i es 0
            p = false; //Pones p a false y así sales del bucle while. Hubiese sido más sencillo con un for
        }
        i++; //Sumas 1 a la variable i
    }
    return p; //Devuelves p al main y alli se printea si el número es primo o no

    // Lo que hace el programa es  comprobar si un número es primo de la siguiente manera: itera la divisón del número entre el contador
    // y si encuentra modulos 0 entre los resultados, el número no es primo, por lo que p pasa a false.  
}

//CALCULA SI EL NÚMERO ES PRIMO!
