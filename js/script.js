

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


let codigoIngresado = prompt ("Si tienes un codigo de descuento, ingresalo ahora:");


function calcularValor (codigoProducto, codigoIngresado) {

    let precioDeLista = valorEleccion (codigoProducto);

    if (codigoIngresado.toLowerCase () === "micodigo"){
        let valorFinalProducto = precioDeLista - (precioDeLista*0.20);
        alert ("El precio de tu producto con un 20% de descuento es " + valorFinalProducto);
    }

    else {
        alert ("El precio de tu producto es " + precioDeLista);
    }
    
}

calcularValor (codigoProducto, codigoIngresado);

// 

// let precioBikini = 2000
// let precioEnteriza = 2500
// let precioPareo = 1300

// let eleccionPago = prompt ("Deseas hacer el pago en cuotas?")

// function calcularPrecio ()

// const calculoPrecio1  = (precioBikini, valorDescuento) => { return a };

// const calculoPrecio2  = (a) => { return a*PORCENTAJEDESCUENTO2 };

// const calculoPrecio3  = (a) => { return a*EXTRACUOTASDESCUENTO };

// const calculoPrecio4  = (a) => { return a*EXTRACUOTASSINDESCUENTO };





