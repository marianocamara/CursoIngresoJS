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
    case "Febrero":          //fallthrough    (se pone para mostrar que esta hecho a proposito y no es un error)
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    {
        alert ("Falta para el invierno.");
        break;
    }
    case "Septiembre":      //falltrhough
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
    case "Enero":
    {
        alert ("Ya pasamos el frio, ahora calor!!!");
        break;
    }
}




}//FIN DE LA FUNCIÓN