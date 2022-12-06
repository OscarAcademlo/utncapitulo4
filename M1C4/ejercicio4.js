let traslado =150000
if  ( traslado <=1000){
console.log("Debes caminar a tu lugar de destino");
}
if (traslado >=1000 && traslado <= 10000){
    console.log("Debes moverte en bicicleta a tu destino");
}else if (traslado >=30000 && traslado <= 100000){
    console.log("Debes moverte con tu  auto a tu destino");
}else  if(traslado >100000){
    console.log("Tu unica opcion es viajar en avion");
}


