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
    borrar.id = `borrar-${producto.id}`;


    
    row.appendChild(newCard);

} 

