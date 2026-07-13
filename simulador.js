//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular() {
    //recuperamos propiedades de la caja de texto
    let componenteIngresos = document.getElementById("txtIngresos");
    let componenteEgresos = document.getElementById("txtEgresos");

    //recuperamos el valor de las cajas de texto en string
    let ingresosStr = componenteIngresos.value;
    let egresosStr = componenteEgresos.value;

    //convertimos el texto a numeros
    let ingresos = parseFloat(ingresosStr);
    let egresos = parseFloat(egresosStr);

    let disponible = calcularDisponible(ingresos, egresos);

    let spnDisponible = document.getElementById("spnDisponible");
    spnDisponible.textContent = disponible;

    //mostrar la capacidad de pago
    let montoDisponible = calcularCapacidadPago(disponible);
    let spnCapacidadPago = document.getElementById("spnCapacidadPago");
    spnCapacidadPago.textContent = montoDisponible;

    //Solicitud de credito
    //recuperamos propiedades de la caja de texto
    let componenteMonto = document.getElementById("txtMonto");
    let componentePlazo = document.getElementById("txtPlazo");
    let componenteTasaInteres = document.getElementById("txtTasaInteres");

    //recuperamos el valor de las cajas de texto en string
    let montoStr = componenteMonto.value;
    let plazosStr = componentePlazo.value;
    let tasaInteresStr = componenteTasaInteres.value;

    //convertimos el texto a numeros
    let monto = parseInt(montoStr);
    let plazo = parseInt(plazosStr);
    let tasaInteres = parseInt(tasaInteresStr);

    let interesSimple=calcularInteresSimple(monto,tasaInteres,plazo);

    let spnInteresPagar=document.getElementById("spnInteresPagar");
    spnInteresPagar.textContent=interesSimple;

    //total a pagar

    let totalPago=calcularTotalPagar(monto,interesSimple);

    let spnTotalPrestamo=document.getElementById("spnTotalPrestamo");
    spnTotalPrestamo.textContent=totalPago;

    //cuota mensual

    let cuotaMensual=calcularCuotaMensual(totalPago,plazo);
    
    spnCuotaMensual=document.getElementById("spnCuotaMensual");
    spnCuotaMensual.textContent=cuotaMensual;



}