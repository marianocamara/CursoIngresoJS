function Mostrar()
{

var numero = parseInt(prompt("ingrese un numero"));
var cantidad=0; 

for (contador=1;contador!=numero+1;contador++)
{
    if (contador%2==0)
    {
        cantidad++;
        console.log(contador);
    }
    
}
    console.log("La cantadidad de numeros pares es: "+cantidad);
    
}//FIN DE LA FUNCIÓN