//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    //recuperamos propiedades de la caja de texto
    let componenteIngresos = document.getElementById("txtIngresos");
    let componenteEgresos = document.getElementById("txtEgresos");

    //recuperamos el valor de las cajas de texto en string
    let ingresosStr = componenteIngresos.value;
    let egresosStr = componenteEgresos.value;

    //convertimos el texto a numeros
    let ingresos = parseFloat(ingresosStr);
    let egresos=parseFloat(egresosStr);

    let disponible = calcularDisponible(ingresos,egresos);
    
    let spnDisponible=document.getElementById("spnDisponible");
    spnDisponible.textContent=disponible;
}