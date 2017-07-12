function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";
	
while (respuesta == "si")
{
	contador++;
	numero = parseInt(prompt ("Ingresar un numero: "));
	if (numero>=0)
	{
		positivo+= numero;
	}
	else
	{
		negativo*= numero;
	}
	respuesta= prompt ("¿Desea continuar ingresando numeros?");
}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN