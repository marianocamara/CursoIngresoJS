function Mostrar()
{
    var nota;
    var sexo;
    var menor;
    var bandera = true;
    var acumulador=0;
    var varones=0;

    for (contador=0;contador<5;contador++)
    {
        nota = parseInt(prompt("Ingrese la nota:"));
        
        while (nota<0 || nota>10)
        {
           nota = parseInt(prompt ("Ingrese una nota entre 0 y 10."));
        }

        acumulador = acumulador + nota;

        sexo = prompt("Ingrese el sexo :");

        while (sexo!="f" && sexo!="m")
        {
           sexo = prompt ("Ingrese f ò m.");
        }

        if (bandera)
        {
            menor = nota;
            bandera = false;
        }

        if (nota<menor)
        {
            menor = nota;
        }

        if (nota>6 && sexo=="m")
        {
            varones++;
        }
    }
    
    alert("El promedio de notas es: "+(acumulador/5)+".");
    alert ("La nota mas baja es: "+ menor+".");
    alert("La cantidad de varones con nota mayor a seis es: "+varones+".");
    


}
