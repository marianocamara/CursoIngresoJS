function Mostrar()
{
//tomo la edad  
    var edad;
    edad = parseInt (document.getElementById("edad").value);

    if (edad>=18)
    {
        alert("Es mayor de edad.");
    }  
    else if (edad<13)
    {
        alert("Es un niño.");
    }
    else
    {
        alert ("Es adolescente.")
    }



}//FIN DE LA FUNCIÓN