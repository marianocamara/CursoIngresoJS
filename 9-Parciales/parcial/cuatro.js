function Mostrar()
{
    var numeroUno = parseInt(prompt ("Ingrese el primer numero: "));
    var numeroDos = parseInt(prompt ("Ingrese el segundo numero: "));
    

    if (numeroUno == numeroDos)
    {
        document.write ("La multiplicacion es: "+numeroUno*numeroDos+".");  
    }
    else if ( numeroUno > numeroDos)
    {
       document.write ("La resta es "+(numeroUno - numeroDos)+".");
    }
    else
    {
       document.write ("la suma es "+(numeroUno + numeroDos)+".");
    }
  

}
