function Mostrar()
{
    var numero;
    var pregunta=true;
    var contadorPar=0;
    var acumulador=0;
    var contador=0;
    var bandera=true;
    var suma;

   while(pregunta)
   {
       contador++;

       numero = parseInt(prompt("Ingrese un numero: "));
       while(numero<0)
       {
           numero = parseInt(prompt("Ingrese un numero positivo."));
       }
       
        if (bandera)
        {
            menor = numero;
            mayor = numero;
            bandera = false;
        }

        if (numero>mayor)
        {
            mayor = numero;
        }
        if (numero<menor)
        {
            menor = numero;
        }

       suma = acumulador += numero;

       if (numero%2==0)
       {
           contadorPar++;
       }
       pregunta = confirm ("¿Desea seguir ingersando numeros?");
   }
   
   document.write ("La cantidad de numero pares es "+contadorPar+".</br>");
   document.write ("El promedio es "+(suma/contador)+".</br>");
   document.write ("La suma de los numeros es "+suma+".</br>");
   document.write ("El numero maximo es "+mayor+" y el numero minimo es "+menor+".</br>");
    


}
