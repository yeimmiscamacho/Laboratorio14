
console.log("Laboratorio Parte 1");
console.log("----------------------------------------------");

let bus=[25,23,78,25,90,34,25,90,76]
let suma=0

for(let i=0; i<bus.length; i++){
    console.log("Peso:", bus[i])
    suma=suma+bus[i]
    
}
console.log("El peso total es:", suma)
console.log("El Promedio es:", suma/bus.length)