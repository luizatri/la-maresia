$( document ).ready(function() {
    console.log('El DOM está listo.');
});

class Producto {
    constructor (id, categoria, nombre, color, talle, precio) {
        this.id = parseFloat(id);
        this.categoria = categoria.toLowerCase();
        this.modelo = modelo.toLowerCase();
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

const productos = [{ id: 1, categoria: "Bikini", modelo: "vainilla".toUpperCase(), color: "blanco", talle: "S", precio: 2000, imgSrc: "images/fotos/destacado1.jpg"},
                   { id: 2, categoria: "Bikini", modelo: "sol de toscana".toUpperCase(), color: "amarillo", talle: "M", precio: 2000, imgSrc: "images/fotos/destacado2.jpg"},
                   { id: 3, categoria: "Bikini", modelo: "mar griego".toUpperCase(), color: "azul", talle: "M", precio: 2000, imgSrc: "images/fotos/destacado3.jpg"},
                   { id: 4, categoria: "Enteriza", modelo: "caraiva".toUpperCase(), color: "naranja", talle: "L", precio: 2500, imgSrc: "images/fotos/destacado4.jpg"},
                   { id: 5, categoria: "Enteriza", modelo: "salvador".toUpperCase(), color: "celeste", talle: "S", precio: 2500, imgSrc: "images/fotos/destacado5.jpg"},
                   { id: 6, categoria: "Enteriza", modelo: "porto seguro".toUpperCase(), color: "violeta", talle: "L", precio: 2500, imgSrc: "images/fotos/destacado6.jpg"},
                   { id: 7, categoria: "Pareo", modelo: "sandia".toUpperCase(), color: "rojo", talle: "U", precio: 1300, imgSrc: "images/fotos/destacado7.jpg"},
                   { id: 8, categoria: "Pareo", modelo: "melon".toUpperCase(), color: "verde", talle: "U", precio: 1300, imgSrc: "images/fotos/destacado8.jpg"},
                   { id: 9, categoria: "Pareo", modelo: "uva".toUpperCase(), color: "violeta", talle: "U", precio: 1300, imgSrc: "images/fotos/destacado9.jpg"}]


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
    let borrar = newCard.getElementsByClassName("borrar")[0];

    img.src = producto.imgSrc;
    title.innerHTML = `${producto.categoria} - ${producto.modelo}`;
    price.innerHTML = `$ ${producto.precio}`;

    agregar.id = `agregar-${producto.id}`;


    
    row.appendChild(newCard);

} 



const carrito = []

let boton1 = $("#agregar-1");
boton1.click(function () {
    agregarElemento(1)});
  
let boton2 = $("#agregar-2");
boton2.click(function () {
    agregarElemento(2)});
  
let boton3 = $("#agregar-3");
boton3.click(function () {
    agregarElemento(3)});
  
let boton4 = $("#agregar-4");
boton4.click(function () {
    agregarElemento(4)});
  
let boton5 = $("#agregar-5");
boton5.click(function () {
    agregarElemento(5)});
  
let boton6 = $("#agregar-6");
boton6.click(function () {
    agregarElemento(6)});
  
let boton7 = $("#agregar-7");
boton7.click(function () {
    agregarElemento(7)});
  
let boton8 = $("#agregar-8");
boton8.click(function () {
    agregarElemento(8)});
  
let boton9 = $("#agregar-");
boton9.click(function () {
    agregarElemento(9)});
  

localStorage.setItem("carrito", carrito);



let templateCarrito = document.getElementById ("producto-carrito-template");
let divCart = document.getElementById("cart-productos");


function mostrarCarrito(){    


    let precioTotal = 0;
    let contenedor = document.getElementById ("carrito")

contenedor.innerHTML ="";
htmlString = "<div>";

for (const id in carrito) {

    let producto = carrito[id];
    htmlString += `
    <div>

    <div class="row ">

        <div class="col-3">
            <img src="${producto.imgSrc}" class="img-producto">
        </div>

        <div class="col-3">
            <h5 class="titulo-producto"> ${producto.categoria} + ${producto.modelo}</h5>
        </div>

        <div class="col-3">
            <p class="precio-producto">$ ${producto.precio}</p>
        </div>

        <div class="col-3">
            <a href="#" class="btn btn-primary eliminar" id="borrar_${id}">🗑️</a>
        </div>

    </div>

</div>
      `
      precioTotal += producto.precio;
}
htmlString += "</div>";


contenedor.innerHTML = htmlString;

let contenedorPrecio = document.getElementById ("precio-total")
contenedorPrecio.innerHTML = `TOTAL: ${precioTotal} `

eliminarCarrito ()

}



function agregarElemento(productoID){
    let producto = productos.find( (p => p.id === productoID))
    carrito.push(producto);

    mostrarCarrito();

    cartCount();

}

function eliminarCarrito () {
    let botones = document.getElementsByClassName("eliminar");

    for (const boton of botones) {
        boton.onclick = () => {
            let id = boton.getAttribute ("id");
            idNumber = id.split ("_") [1];
            carrito.splice(idNumber, 1);

            mostrarCarrito();
        }
    }

}



function cartCount() {
    $("#item-count").html(" (" + carrito.length + ") ");
    $("#cart-icon").html(" (" + carrito.length + ") ");
}



