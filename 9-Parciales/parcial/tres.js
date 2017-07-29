function Mostrar()
{
    var largo = parseInt(document.getElementById("alrgo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    var alambre = (largo*2+ancho*2)*3;

    alert ("Se necesitan "+alambre+ " mts de alambre.");


}
