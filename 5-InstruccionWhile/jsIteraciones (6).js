function Mostrar()
{

	var contador=0;
	var acumulador = 0;

	while(contador<5)
	{
		contador++;
		console.log("contador: "+contador);
		numero = Math.floor((Math.random() * 5) )+ 1;
		console.log("numero: "+numero);
		acumulador = acumulador + numero;
		console.log("suma: "+acumulador);
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN