$(document).ready(function () {
    console.log('El DOM está listo.');
});

class Producto {
    constructor(id, categoria, modelo, color, talle, precio, img) {
        this.id = parseFloat(id);
        this.categoria = categoria.toLowerCase();
        this.modelo = modelo.toLowerCase();
        this.color = color.toLowerCase();
        this.talle = talle.toLowerCase();
        this.precio = parseFloat(precio);
        this.img = img;
        this.stock = 20;
    }

    precioIVA() {
        return this.precio * 1.21;
    }

    precio() {
        return this.precio;
    }

    vender() {
        if (this.stock === 0) {
            alert("No hay más stock del producto elegido.");
        } else {
            console.log("Producto vendido.")
            this.stock--;
        }
    }

    refill() {
        this.stock += 20;
    }

}

const bikinis= []
    bikinis.push (new Producto(1, "Bikini", "vainilla", "blanco", "S", 2000, "./images/fotos/destacado1.jpg"));
    bikinis.push (new Producto(2, "Bikini", "sol de toscana", "amarillo", "M", 2000, "./images/fotos/destacado2.jpg"));
    bikinis.push (new Producto(3, "Bikini", "mar griego", "azul", "M", 2000, "./images/fotos/destacado3.jpg"));

const enterizas= []
    bikinis.push (new Producto(4, "Enteriza", "caraiva", "naranja", "L", 2500, "./images/fotos/destacado4.jpg"));
    bikinis.push (new Producto(5, "Enteriza", "salvador", "celeste", "S", 2500, "./images/fotos/destacado5.jpg"));
    bikinis.push (new Producto(6, "Enteriza", "porto seguro", "violeta", "L", 2500, "./images/fotos/destacado6.jpg"));

const pareos= []
    bikinis.push (new Producto(7, "Pareo", "sandia", "rojo", "U", 1300, "./images/fotos/destacado7.jpg"));
    bikinis.push (new Producto(8, "Pareo", "melon", "verde", "U", 1300, "./images/fotos/destacado8.jpg"));
    bikinis.push (new Producto(9, "Pareo", "uva", "violeta", "U", 1300, "./images/fotos/destacado9.jpg"));

const productos = bikinis.concat(enterizas, pareos); 

let rowNumber = 0;
let rowContainer = document.getElementById("row-container");
let templateCard = document.getElementsByClassName("card-template")[0];

for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let row = document.getElementById(`row-${rowNumber}`);

    if (i % 3 === 0) {
        rowNumber++;
        row = document.createElement("div");
        row.id = `row-${rowNumber}`;
        row.className = "col-8 card-group";
        rowContainer.appendChild(row);
    }

    let newCard = templateCard.cloneNode(true);

    newCard.id = `producto-${producto.id}`;
    newCard.className = "card";
    let img = newCard.getElementsByClassName("card-img-top")[0];
    let title = newCard.getElementsByClassName("card-title")[0];
    let price = newCard.getElementsByClassName("card-text")[0];
    let agregar = newCard.getElementsByClassName("agregar")[0];

    img.src = producto.img;
    title.innerHTML = `${producto.categoria} - ${producto.modelo}`;
    price.innerHTML = `$ ${producto.precio}`;

    agregar.id = `agregar-${producto.id}`;



    row.appendChild(newCard);

}



const carrito = []

const botonesAgregar = $(".agregar");
for (const btnAgregar of botonesAgregar) {
    console.info("btn ", btnAgregar)
    const id = $(btnAgregar).attr("id");
    $(btnAgregar).click(() => {
        if (id.length) {
            const idx = id.split("-")[1];
            agregarElemento(parseInt(idx));
            return false;
        }
    });
}

let templateCarrito = $("#producto-carrito-template");
let divCart = $("#cart-productos");


function adicionarProductoACarrito() {


    let precioTotal = 0;
    let contenedor = $("#carrito")
    contenedor.html("");
    htmlString = "<div>";

    for (const producto of carrito) {

        htmlString += `
    <div>

    <div class="row ">

        <div class="col-3">
            <img src="${producto.img}" class="img-producto">
        </div>

        <div class="col-3">
            <h5 class="titulo-producto"> ${producto.categoria} + ${producto.modelo}</h5>
        </div>

        <div class="col-3">
            <p class="precio-producto">$ ${producto.precio}</p>
        </div>

        <div class="col-3">
            <a href="#" class="btn btn-primary eliminar" id="borrar_${producto.id}">🗑️</a>
        </div>

    </div>

</div>
      `
        precioTotal += producto.precio;
    }
    htmlString += "</div>";

    contenedor.html(htmlString);

    let contenedorPrecio = $("#precio-total")
    contenedorPrecio.html(`TOTAL: ${precioTotal}`)
    

    eliminarCarrito()

}




function agregarElemento(productoID) {
    let producto = productos.find((p => p.id === productoID))
    carrito.push(producto);
    
    adicionarProductoACarrito();

    cartCount();

}

function eliminarCarrito() {

    let botones = $(".eliminar");

    for (const boton of botones) {
        boton.onclick = () => {

            let id = $(boton).attr("id");
            const productoID = parseInt(id.split("_")[1]);
            let producto = productos.find((p => p.id === productoID));
            carrito.splice(carrito.indexOf(producto), 1);


            adicionarProductoACarrito();

            cartCount();

            return false;


        }
    }

}



function cartCount() {
    $("#item-count").html(" (" + carrito.length + ") ");
    $("#cart-icon").html(" (" + carrito.length + ") ");

    let carritoLleno = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoLleno);
}
