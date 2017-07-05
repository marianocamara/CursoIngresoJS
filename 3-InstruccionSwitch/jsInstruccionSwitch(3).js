function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
    
   switch(mesDelAño)
   {
    case "Febrero":
    {
        alert ("Este mes no tiene más de 29 días.");
        break;
    }
    case "Septiembre":      
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":         
    case "Julio":           
    case "Agosto": 
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    {
        alert ("Este mes tiene 30 o más días.");
        break;
    }
   }

}//FIN DE LA FUNCIÓN