function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch (mesDelAño)
{
    case "Julio":           //fallthrough
    case "Agosto":
    {
        alert ("Abrigate que hace frio.");
        break;
    }
    case "Septiembre":      //falltrhough
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        {
        alert ("Ya pasamos el frio, ahora calor!!!");
        break;
    }
    default:                //reemplaza el resto de opciones
    {
        alert ("Falta para el invierno.");
        break;
    }
}




}//FIN DE LA FUNCIÓN