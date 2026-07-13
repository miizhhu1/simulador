//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let disponible = ingresos-egresos;
    if (disponible>0){
        return disponible.toFixed(2);
    }else{
        return 0;
    }
}

function calcularCapacidadPago(montoDisponible){
    montoDisponible = montoDisponible*0.50;
    return montoDisponible.toFixed(2);
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interes= plazoAnios*monto*(tasa/100);
    return interes.toFixed(2);
}

function calcularTotalPagar(monto, interes){
    interes = parseFloat(interes);
    let totalPago = monto + interes + 100;
    return totalPago.toFixed(2);
}

function calcularCuotaMensual(total,plazoAnios){
    let cuotaMensual=plazoAnios*12;
    let cuota = total/cuotaMensual;
    return cuota.toFixed(2);
}

function aprobarCredito(capacidadPago,cuotaMensual){
    if(capacidadPago>cuotaMensual){
        return true;
    } else{
        return false;
    }
}
