/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var porcentaje;
    var resultado;
    sueldo = parseInt (document.getElementById("sueldo").value);
    porcentaje = (sueldo * 10)/100;   //ó sueldo*0.1 ó si queremos ya la suma hecha sueldo*1.1
    resultado = sueldo + porcentaje;
    (document.getElementById("resultado").value) = resultado;
}
