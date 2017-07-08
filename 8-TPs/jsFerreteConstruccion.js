/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largo;
var ancho;
var radio;

function Rectangulo () 
{
    largo = parseInt (document.getElementById("Largo").value);
    ancho = parseInt (document.getElementById("Ancho").value);
    var alambre = ((largo + ancho ) * 2)*3;
    alert ("Se necesitan "+alambre+ " de alambre.");
    
}
function Circulo () 
{
    radio = parseInt (document.getElementById("Radio").value);
    var alambre = (2*Math.PI*radio)*3;
    alert ("Se necesitan "+alambre+ " de alambre.");
}
function Materiales () 
{
	largo = parseInt (document.getElementById("Largo").value);
    ancho = parseInt (document.getElementById("Ancho").value);
    var cemento = (largo * ancho)*3;
    var cal = (largo * ancho) *2;
    alert ("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}