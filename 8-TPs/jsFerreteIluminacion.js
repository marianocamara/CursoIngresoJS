/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparitas = parseInt (document.getElementById("Cantidad").value);
    var marca=(document.getElementById("Marca").value);
    

    if (lamparitas>=6)
    {
         document.getElementById("precioDescuento").value = (lamparitas*35)*0.5;
    }
    else 
    {
        switch (marca)
        {
            case "ArgentinaLuz":
            {
                if (lamparitas == 5)
                {
                    document.getElementById("precioDescuento").value = (lamparitas*35)*0.6;
                }
                else if (lamparitas == 4)
                {
                    document.getElementById("precioDescuento").value = (lamparitas*35)*0.75;
                }
                else if (lamparitas == 3)
                {
                    document.getElementById("precioDescuento").value = (lamparitas*35)*0.85;
                }
                break;
            }
            case "FelipeLamparas":
            {
                if (lamparitas == 5)
                {
                   document.getElementById("precioDescuento").value = (lamparitas*35)*0.7; 
                }
                else if (lamparitas == 4)
                {
                    document.getElementById("precioDescuento").value = (lamparitas*35)*0.75;
                }
                else if (lamparitas == 3)
                {
                    document.getElementById("precioDescuento").value = (lamparitas*35)*0.90;
                }
                break;
            }
            case "HazIluminacion":
            case "JeLuz":
            case "Osram":
            {
                if (lamparitas == 5)
                {
                   document.getElementById("precioDescuento").value = (lamparitas*35)*0.7; 
                }
                else if (lamparitas == 4)
                {
                    document.getElementById("precioDescuento").value = (lamparitas*35)*0.80;
                }
                else if (lamparitas == 3)
                {
                    document.getElementById("precioDescuento").value = (lamparitas*35)*0.95;
                }
                break;
            }
        }
    }
    
    var precio =  parseInt(document.getElementById("precioDescuento").value);
    var iibb = Math.floor((parseInt(document.getElementById("precioDescuento").value))*0.10);
    var total = precio + iibb;

    if (precio>=120)
    {
        alert("El total es $"+total+". Usted pago $"+iibb+" de IIBB.");
    }
    
    
    //por Cantidad

    if (lamparitas==6)
    {
        document.getElementById("precioDescuento").value = (lamparitas*35)*0.5;
    }
    else if (lamparitas==5 && marca=="ArgentinaLuz")
    {
        document.getElementById("precioDescuento").value = (lamparitas*35)*0.6;
    }
    else if (lamparitas==5)
    {
        document.getElementById("precioDescuento").value = (lamparitas*35)*0.7; 
    }
    else if (lamparitas == 4)
    {
        if (marca=="ArgentinaLuz" || marca=="FelipeLamparas")
        {
            document.getElementById("precioDescuento").value = (lamparitas*35)*0.75;
        }
        else
        {
            document.getElementById("precioDescuento").value = (lamparitas*35)*0.80;
        }
    }
    else if (lamparitas==3 && marca=="ArgentinaLuz")
    {
        document.getElementById("precioDescuento").value = (lamparitas*35)*0.85;
    }
    else if (lamparitas==3 && marca=="FelipeLamparas")
    {
       document.getElementById("precioDescuento").value = (lamparitas*35)*0.90;         
    }
    else if (lamparitas==3)
    {
        document.getElementById("precioDescuento").value = (lamparitas*35)*0.95;
    }
    else
    {
        document.getElementById("precioDescuento").value = lamparitas*35;
    }
}
