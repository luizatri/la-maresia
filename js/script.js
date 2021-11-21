
class Producto {
    constructor (id, categoria, nombre, color, talle, precio) {
        this.id = parseFloat(id);
        this.categoria = categoria.toLowerCase();
        this.nombre = nombre.toLowerCase();
        this.color = color.toLowerCase();
        this.talle = talle.toLowerCase();
        this.precio = parseFloat(precio);
        this.stock = 20;
    }

    precioIVA() {
        return this.precio * 1.21;
    }

    precio() {
        return this.precio;
    }

    vender () {
        if (this.stock === 0) {
            alert ("No hay más stock del producto elegido.");
        }

        else{
            console.log ("Producto vendido.")
            this.stock --;
        }
    }

    refill () {
        this.stock += 20;
    }

}

class Compra {

    constructor (talle, producto){
        this.talle = talle;
        this.producto = producto;
        this.valor = buscarPrecio;
    }

    finalizar () {
        alert ("Muchas gracias por tu compra. Tu " + this.producto + ", " + "talle " + this.talle + ", valor " + this.valor + " se entregará en hasta 3 días hábiles.")
    }
}




function obtenerProductos() {
    const productos = [];
    productos.push(new Producto(1, "bikini", "mar griego", "azul", "M", 2000));
    productos.push(new Producto(2, "bikini", "vino francés", "azul", "S", 2000));
    productos.push(new Producto(3, "bikini", "sol de toscana", "amarillo", "M", 2000));


    /* enterizas*/
    productos.push(new Producto(4, "enteriza", "rio de janeiro", "naranja", "L", 2500));
    productos.push(new Producto(5, "enteriza", "salvador", "celeste", "S", 2500));
    productos.push(new Producto(6, "enteriza", "porto seguro", "violeta", "L", 2500));

    /* pareos*/
    productos.push(new Producto(7, "pareo", "sandia", "rojo", "U", 1300));
    productos.push(new Producto(8, "pareo", "melon", "verde", "U", 1300));
    productos.push(new Producto(9, "pareo", "uva", "violeta", "U", 1300));

    return productos;
}


// INICIO DEL ALGORITMO


let nombreUsuario = prompt("Bienvenid@! Ingrese tu nombre:");
let saludoBeneficio = prompt("Hola " + nombreUsuario + "! Te gustaria acceder a un beneficio exclusivo?");

if (validarEntrada(saludoBeneficio, "si", "sí")) {
    alert ("Tu código exclusivo por un descuento de 20% es MICODIGO.")
}
else {
    alert ("Que pena! Todavía podrás pagar tus compras en cuotas.");
}


let talleUsuario = prompt("¿Cuál es tu talle? Small, Medium o Large?");


const productos = obtenerProductos();

let talleS = productos.filter(producto => producto.talle === "s")
let talleM = productos.filter(producto => producto.talle === "m");
let talleL = productos.filter(producto => producto.talle === "l");

console.log (talleS);

let articulo1 = comunicarDisponibilidad();

///////// Esta parte no me funciona! No devuelve ningun valor. Deberia identificar el articulo por su ID; y despues el precio del producto con ese ID. 

const buscarArticulo = productos.filter (producto => producto.id === articulo1);
const buscarPrecio = buscarArticulo.find (precio => precio > 3);

///////////////////


let codigoIngresado = prompt ("Si tienes un codigo de descuento, ingresalo ahora:");

let valorFinalProducto = calcularValor (codigoIngresado);
let producto = buscarArticulo.categoria + buscarArticulo.nombre;

const compra1 = new Compra (talleUsuario, producto);

compra1.finalizar();



/// FUNCIONES



function validarEntrada (input, condicion1, condicion2) {
    if (condicion1.toLowerCase() === input.toLowerCase() || condicion2.toLowerCase() === input.toLowerCase()) {
        return true;
    }

    return false;

}


function calcularValor (codigoIngresado) {


    let precioDeLista = articulo1;
    let valorFinalProducto = 0;

    if (codigoIngresado.toLowerCase () === "micodigo"){
        valorFinalProducto = precioDeLista - (precioDeLista*0.20);
    }

    else {
        valorFinalProducto = precioDeLista;
    }

    return valorFinalProducto;

}



function comunicarDisponibilidad (){

    switch(talleUsuario) {
        case "small":
        case "s":
            prompt (`Ingresa el precio del articulo de tu interes. \n Estos son los productos disponibles en tu talle:\n ${listarProductos(talleS)} \n`);
            break;
        case "medium":
        case "m":
            prompt (`Ingresa el precio del articulo de tu interes. \n Estos son los productos disponibles en tu talle:\n ${listarProductos(talleM)} \n`);
            break;
        case "large":
        case "l":
            prompt (`Ingresa el precio del articulo de tu interes. \n Estos son los productos disponibles en tu talle:\n ${listarProductos(talleL)} \n`);
            break;
        default:
            alert("No has ingresado ningún talle. Tu pedido no ha sido registrado.");
    }
    
 }

function listarProductos(productos) {
    let result = "";

    for (let producto of productos) {
        result += `ID: ${producto.id} - MODELO: ${producto.nombre} - COLOR: ${producto.color} - PRECIO: ${producto.precioIVA()} \n`;
    }

    return result;
}








// function preguntarArticulosAdicionales(articulo) {
    
//     articulo = 0

//     do {
//        articulo = prompt ("Si deseas algun otro artículo, ingresa ahora su ID. Caso contrario, deja el campo el blanco.");
//     }
    
//     while (articulo != 0)
   
// }




// function comunicarDisponibilidad (){

//     switch(talleUsuario) {
//         case "small":
//         case "s":
//             let idElegido = prompt (`Ingresa el ID del articulo de tu interes. \n Estos son los productos disponibles en tu talle:\n ${listarProductos(talleS)} \n`);
//             return idElegido;
//         case "medium":
//         case "m":
//             prompt (`Ingresa el ID del articulo de tu interes. \n Estos son los productos disponibles en tu talle:\n ${listarProductos(talleM)} \n`);
//             break;
//         case "large":
//         case "l":
//             prompt (`Ingresa el ID del articulo de tu interes. \n Estos son los productos disponibles en tu talle:\n ${listarProductos(talleL)} \n`);
//             break;
//         default:
//             alert("No has ingresado ningún talle. Tu pedido no ha sido registrado.");
//     }
    
//  }