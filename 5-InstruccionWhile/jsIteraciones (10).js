function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta=true;
	var numero;
	var acumulador_positivo = 0;
	var acumulador_negativo = 0;
	var contador_positivo= 0;
	var contador_negativo=0;
	var contador_ceros= 0;
	var contador_par=0;
	var contador_impar=0;
		

	while(respuesta==true)
	{
		contador++;
		numero=parseInt(prompt("Ingrese un numero : "));
		while (isNaN(numero))									
		{
			numero = parseInt(prompt ("Ingresar otro numero: "));
		}
				
		if (numero==0)
		{
			contador_ceros++;
		}
		else if (numero>0)
		{
			contador_positivo++;
			acumulador_positivo+= numero;	
		}
		else if (numero<0)
		{
			contador_negativo++;
			acumulador_negativo+= numero;	
		}	
		if (numero !=0 && numero%2==0)
		{
			contador_par++;
		}
		respuesta = confirm("¿Desea seguir ingresando numeros?");
	}

var promedio_positivo = acumulador_positivo/contador_positivo;
var promedio_negativo = acumulador_negativo/contador_negativo;
var diferencia = Math.abs(contador_positivo-contador_negativo);

if (contador_positivo==0)
{
	promedio_positivo = "No ingreso ningun numero positivo."; 
}

if (isNaN(promedio_negativo))
{
	promedio_negativo = "No ingreso ningun numero negativo";
}

document.write("La suma de numeros positivos es: "+acumulador_positivo+".<br/>");
document.write("La suma de numeros negativos es: "+acumulador_negativo+".<br/>");
document.write("La cantidad de numeros positivos es: "+contador_positivo+".<br/>");
document.write("La cantidad de numeros positivos es: "+contador_negativo+".<br/>");
document.write("La cantidad de ceros es: "+contador_ceros+".<br/>");
document.write("la cantidad de numeros pares es: "+contador_par+".<br/>")
document.write("El promedio de los numeros positivos es: "+promedio_positivo+".<br/>");
document.write("El promedio de los numeros negativos es: "+promedio_negativo+".<br/>");
document.write ("La diferencia es: "+diferencia+".")



}//FIN DE LA FUNCIÓN