

function validarEntrada (input, condicion1, condicion2) {
    if (condicion1.toLowerCase() === input.toLowerCase() || condicion2.toLowerCase() === input.toLowerCase()) {
        return true;
    }

    return false;

}

let saludoBeneficio = prompt("Bienvenid@! Te gustaria acceder a un beneficio exclusivo?");

if (validarEntrada(saludoBeneficio, "si", "sí")) {
    alert ("Tu código exclusivo por un descuento de 20% es MICODIGO.")
}   
else {
    alert ("Que pena! Todavía podrás pagar tus compras en cuotas.");
}

let talleUsuario= prompt("¿Cuál es tu talle? Small, Medium o Large?");

if (validarEntrada(talleUsuario, "small", "s")) {
    alert ("Hay bikinis y enterizas disponibles.");
}

else if (validarEntrada(talleUsuario, "medium", "m")) {
    alert ("Solo hay bikinis disponibles.");
}

else if (validarEntrada(talleUsuario, "large", "l")) {
    alert ("Hay bikinis, enterizas y pareos disponibles.");
}

else {
    alert ("No has ingresado ningún talle. Puedes consultar la disponibilidad en el sitio.");
}

let codigoProducto = parseInt (prompt("Ingrese el código de tu producto: 1 para bikinis, 2 para enterizas y 3 para pareos."));

function valorEleccion (codigoProducto) {
    switch (codigoProducto) {
        case 1:
            return 2000;
            break;
        case 2:
            return 2500;
            break;
        case 3:
            return 1300;
            break;
        default:
            return -1;
            break
    }

}

function productoElegido (codigoProducto) {
    switch (codigoProducto) {
        case 1:
            return "bikíni";
            break;
        case 2:
            return "enteriza";
            break;
        case 3:
            return "pareo";
            break;
        default:
            return -1;
            break
    }

}


let codigoIngresado = prompt ("Si tienes un codigo de descuento, ingresalo ahora:");


function calcularValor (codigoProducto, codigoIngresado) {

    
    let precioDeLista = valorEleccion (codigoProducto);
    let valorFinalProducto = 0;

    if (codigoIngresado.toLowerCase () === "micodigo"){
        valorFinalProducto = precioDeLista - (precioDeLista*0.20);
    }

    else {
        valorFinalProducto = precioDeLista;
    }

    return valorFinalProducto;
    
}



class Compra {
    constructor (talle, producto, valor){
        this.talle = talle;
        this.producto = producto;
        this.valor = valor;
    }

    finalizar () {
        alert ("Muchas gracias por tu compra. Tu " + this.producto + ", " + "talle " + this.talle + ", valor " + this.valor + " se entregará en hasta 3 días hábiles.")
    }
}

    // const compra1 = new Compra ("S", "bikini", 2500)

let valorFinalProducto = calcularValor (codigoProducto, codigoIngresado);
let producto = productoElegido (codigoProducto);

const compra1 = new Compra (talleUsuario, producto, valorFinalProducto);

compra1.finalizar();

