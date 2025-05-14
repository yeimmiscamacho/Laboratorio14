console.log("Parte 3: Uso de Operadores Lógicos y Concatenación de Strings")
console.log("--------------------------------------------------------------")

let esMayordeEdad=true;
let tieneLicencia=false;

console.log("Mayor de Edad:", esMayordeEdad)
console.log("Licencia:", tieneLicencia)

console.log("Acceso a Bono:", esMayordeEdad && tieneLicencia)
console.log("Acceso a Evento:", esMayordeEdad || tieneLicencia)

console.log("--------------------------------------------------------------")
let estudiante="Juanito Diaz";
let edad=50

let mensaje="Bienvenido Sr: "+estudiante+" Su Edad es: "+edad+  "Años"
console.log(mensaje)

let mensaje2=`Bienvenido Sr: ${estudiante} Su Edad es:${edad} Años`
console.log(mensaje2)
console.log("--------------------------------------------------------------")