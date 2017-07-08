/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precio_uno;
var precio_dos;
var precio_tres;

function Sumar () 
{
    precio_uno = parseInt (document.getElementById("PrecioUno").value);
    precio_dos = parseInt (document.getElementById("PrecioDos").value);
    precio_tres = parseInt (document.getElementById("PrecioTres").value);
	var suma = precio_uno + precio_dos + precio_tres;
    alert ("El total es "+suma+".");
}
function Promedio () 
{
    precio_uno = parseInt (document.getElementById("PrecioUno").value);
    precio_dos = parseInt (document.getElementById("PrecioDos").value);
    precio_tres = parseInt (document.getElementById("PrecioTres").value);
    var promedio = (precio_uno + precio_dos + precio_tres) / 3;
    alert ( "El promedio es "+promedio+".");
}
function PrecioFinal () 
{
    precio_uno = parseInt (document.getElementById("PrecioUno").value);
    precio_dos = parseInt (document.getElementById("PrecioDos").value);
    precio_tres = parseInt (document.getElementById("PrecioTres").value);
    var precio_final = (precio_uno + precio_dos + precio_tres) * 1.21; 
    alert("El precio final es $"+precio_final+".")
	
}