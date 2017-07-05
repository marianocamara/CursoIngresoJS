function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;
	nota = Math.floor((Math.random() * 10) + 1);
	
	if (nota>=9)
	{
		alert ("Su nota es " +nota+". Excelente!");
	}
	else
	{ 
		if (nota<4)
		{
			alert ("Su nota es " +nota+". Vamos, la proxima se puede!");
		}
		else
		{
			alert ("Su nota es " +nota+". Aprobado.");
		}
	}
}//FIN DE LA FUNCIÓN