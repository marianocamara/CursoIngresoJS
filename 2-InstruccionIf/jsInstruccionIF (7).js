function Mostrar()
{
//tomo la edad  

    var edad;
    var estado_civil;
    edad = parseInt (document.getElemetnById("edad").value);
    estado_civil = (document.getElemetnById("estadoCivil").value);
   
    if (edad<18 && estado_civil != "Soltero")
    {
        alert ("Es muy pequeño para no ser soltero.")
    }
        
	


}//FIN DE LA FUNCIÓN