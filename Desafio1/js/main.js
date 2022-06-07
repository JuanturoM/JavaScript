const pan_dulce = 3.5
const bolillo   = 2.5
const pastelillo = 5.0
let Producto
let cantidad
let costo_total


    

    
do{
    Producto = parseInt(prompt("Seleccionar No del Producto \n 1 = Pan Dulce \n 2 = bolillo \n 3 = Pastelillo"))
        if (isNaN(Producto) || Producto > 3){
            alert("Por favor selecciona tipo de producto correcto")
        }
} while (isNaN(Producto)|| Producto > 3)

do{
    cantidad = parseInt(prompt("Seleccionar Cantidad"))
        if (isNaN(cantidad)){
            alert("Por favor selecciona cantidad de producto correcta")
        }
} while (isNaN(cantidad))

carrito_compras();


function carrito_compras() {

switch (Producto) {
    case 1: 
        costo_total = pan_dulce * cantidad
        alert("costo total de compra: " + "$" + costo_total + "MXN")
        break;

    case 2: 
        costo_total = bolillo * cantidad
        alert("costo total de compra: " + "$" + costo_total + "MXN")
        break;
    
    case 3: 
        costo_total = pastelillo * cantidad
        alert("costo total de compra: " + "$" + costo_total + "MXN")
        break;
    }

}