function Mostrar()
{

var ventas;
var mayor;
var menor;
var bandera = true;

for (contador=0;contador<24;contador++)
{
    ventas = prompt ("Ingrese el importe de ventas del dia.");

    while (ventas<=0)
    {
        ventas = prompt ("Ingrese un valor mayor a cero.");
    }  

    if(bandera)
	{
			mayor = ventas;
			menor = ventas;
    		bandera = false;
    }
    if (ventas>mayor)
    {
        mayor = ventas;
    }
    if(ventas<menor)
    {
        menor = ventas;
    }

}
console.log(menor);
console.log(mayor);

   
    

}
