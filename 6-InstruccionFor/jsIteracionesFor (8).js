function Mostrar() {
    var numero = prompt("Ingrese un numero: ");
    var contador_primos = 0

    for (contador = 0; contador != numero; contador++) 
    {
        if (numero % contador == 0) 
        {
            contador_primos++
        }
    }

    if (contador_primos == 1)
    {
        console.log("El numero es primo.");
    }
    else {
        console.log("El numero no es primo.");
    }




}//FIN DE LA FUNCIÓN