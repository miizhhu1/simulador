//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let disponible = ingresos-egresos;
    if (disponible>0){
        return disponible.toFixed(2);
    }else{
        return 0;
    }
}