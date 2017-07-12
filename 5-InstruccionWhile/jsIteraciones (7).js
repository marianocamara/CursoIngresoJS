function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta = "si";
	
while (respuesta == "si")
{

	contador++;
	numero = parseInt(prompt ("Ingresar un numero: "));
	acumulador = acumulador + numero;
	var respuesta= prompt ("¿Desea continuar ingresando numeros?");
	
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN