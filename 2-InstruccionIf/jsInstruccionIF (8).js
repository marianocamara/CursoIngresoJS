function Mostrar()
{
//tomo la edad  
    var edad;
    var estado_civil;

    edad = document.getElementById("edad").value;
    estado_civil = document.getElementById("estadoCivil").value;
    
    if (edad>17 && estado_civil == "Soltero")
    {
        alert ("Es soltero y no es menor.");
    }
	


}//FIN DE LA FUNCIÓN