function Mostrar()
{

var numero = prompt("Ingrese un numero: ");
var cantidad = 0;

for (contador=0;contador!=numero+1;contador++)
{
    if (numero%contador==0)
    {
        cantidad++;
        console.log(contador);
    }
}

console.log("La cantidad de divisores es "+cantidad);



}//FIN DE LA FUNCIÓN