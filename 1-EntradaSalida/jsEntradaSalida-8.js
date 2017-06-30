/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero_1;
    var numero_2;
    var resto;
    numero_1 = parseInt (document.getElementById("numeroDividendo").value);
    numero_2 = parseInt (document.getElementById("numeroDivisor").value);
    resto = numero_1 % numero_2;
    alert ("El resto es "+resto+".")
}
