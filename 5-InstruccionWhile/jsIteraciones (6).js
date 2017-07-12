function Mostrar()
{

	var contador=0;
	var acumulador = 0;

	while(contador<5)
	{
		contador++;
		console.log("contador: "+contador);
		numero = parseInt(prompt ("Ingresar numero: "));
		while (isNaN(numero))						//para validar que ingrese un numero y no un string
		{
			numero = parseInt(prompt ("Ingresar otro numero: "));
		}
		console.log("numero: "+numero);
		acumulador = acumulador + numero;
		console.log("suma: "+acumulador);
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN