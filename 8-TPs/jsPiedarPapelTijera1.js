/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var contadorGano = 0;
var contadorPerdio = 0;
var contadorEmpate = 0;
var resultado;
var sumaContadores = 0;


function comenzar()
{
    eleccionMaquina = Math.floor(Math.random() * 3)+ 1;
    console.log(eleccionMaquina);
    console.log (sumaContadores);


}//FIN DE LA FUNCIÓN
function piedra()
{
    
	if (eleccionMaquina==1)
    {
        contadorEmpate++;
        resultado = "Empato";
    }
    else if (eleccionMaquina==2)
    {
        contadorPerdio++;
        resultado = "Perdio";
    }
    else
    {
        contadorGano++;
        resultado = "Gano";
    }
mostrarResultado()
comenzar()
}//FIN DE LA FUNCIÓN
function papel()
{
    
    if (eleccionMaquina==1)
    {
        contadorGano++;
        resultado = "Gano";
    }
    else if (eleccionMaquina==2)
    {
        contadorEmpate++;
        resultado = "Empato";
    }
    else
    {
        contadorPerdio++;
        resultado = "Perdio";
    }
mostrarResultado()
comenzar()

}//FIN DE LA FUNCIÓN
function tijera()
{
    
       if (eleccionMaquina==1)
    {
        contadorPerdio++;
        resultado = "Perdio";
    }
    else if (eleccionMaquina==2)
    {
        contadorGano++;
        resultado = "Gano";
    }
    else
    {
        contadorEmpate++;
        resultado = "Empato";
    }
	 mostrarResultado()
     comenzar()
}

function mostrarResultado()
{
    sumaContadores = contadorGano + contadorPerdio + contadorEmpate;
    if (contadorGano >= (contadorEmpate + contadorPerdio ) && sumaContadores >2)
    {
        contadorGano--;
        contadorPerdio++;
        resultado="Perdio";
    }
    alert(resultado+". "+contadorGano+"-"+contadorEmpate+"-"+contadorPerdio);

}
    
    
    //FIN DE LA FUNCIÓN