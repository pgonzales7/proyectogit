// Digite el importe de una compra, en caso de que el importe sea 150 o más, se le descontará el 12%. Mostrar el descuento otorgado y el importe de compra final 

let compra = parseInt(prompt("Ingrese el total de la compra: "));
let descuento = 0

if(compra>=150){
    descuento = compra * 0.12;
}

document.write("El total a pagar por la compra es: " + compra);
document.write(" El descuento aplicado es: " + descuento);


// Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el promedio de prácticas; muestre el nombre del alumno y su promedio final solo si el alumno está aprobado. Tenga en cuenta que para el cálculo del promedio la nota del examen final tiene peso doble.

let nombre = prompt("Ingrese el nombre del alumno: ");
let notas1 = parseInt(prompt("Ingresar notas de examen parcial: "));
let notas2 = parseInt(prompt("Ingresar notas de examen final: ")) * 2;
let notas3 = parseInt(prompt("Ingresar notas del promedio de prácticas: "));
let promedio = (notas1+notas2+notas3)/3;

if(promedio>=11){
    document.write(nombre," esta aprobado: ", promedio);
} else{
    document.write(" estas desaprobado");
}