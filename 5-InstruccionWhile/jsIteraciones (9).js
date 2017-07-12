function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var bandera = true;
	var respuesta = "si";
	
	while(respuesta!='no')
	{
		contador++;
		var numero = parseInt(prompt("Ingrese un numero:"));
		if(bandera)
		{
			maximo = numero;
			minimo = numero;
			bandera = false;			//aca cambiamos el valor para que no se ejecute mas
		}
		if (numero > maximo)
		{
			maximo = numero;
		}
		else if (numero<minimo)
		{
			minimo=numero;
		}
		respuesta= prompt ("¿Desea continuar ingresando numeros?");
	
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;





}//FIN DE LA FUNCIÓN