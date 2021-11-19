
// DESAFIO CLASE 06 ARRAYS

class Producto {
    constructor (categoria, nombre, color, talle, precio) {
        this.categoria = categoria.toLowerCase();
        this.nombre = nombre.toLowerCase();
        this.color = color.toLowerCase();
        this.talle = talle.toLowerCase();
        this.precio = parseFloat(precio);
    }

    
    codigoDescuento() {
        this.precio = this.precio + this.precio * 0.20;
    }

}


const productos = [];

/* bikinis*/

productos.push (new Producto ("bikini","mar griego", "azul", "M", 2000));
productos.push (new Producto ("bikini","vino francés", "azul", "S", 2000));
productos.push (new Producto ("bikini","sol de toscana", "amarillo", "M", 2000));


/* enterizas*/

productos.push (new Producto ("enteriza","rio de janeiro", "naranja", "M", 2500));
productos.push (new Producto ("enteriza","salvador", "celeste", "S", 2500));
productos.push (new Producto ("enteriza","porto seguro", "violeta", "M", 2500));

/* pareos*/

productos.push (new Producto ("pareo","sandia", "rojo", "", 1300));
productos.push (new Producto ("pareo","melon", "verde", "", 1300));
productos.push (new Producto ("pareo","uva", "violeta", "", 1300));


for (const producto of productos)
    producto.codigoDescuento();

console.log(productos);

const talleM = productos.filter(producto => producto.talle === "m");
console.log(talleM);

const buscarRojo = productos.find(producto => producto.color === "rojo"); 
console.log(buscarRojo);

const caros = productos.filter(producto => producto.precio > 2000); 
console.log(caros);


// DESAFIO COMPLEMENTARIO CLASE 06 ARRAYS - ORDENAR

const pedidoCliente01 =[
    {categoria: "bikini", nombre: "mar griego", color:"azuk", precio: 2000},
    {categoria: "enteriza", nombre: "salvador", color:"celeste", precio: 2500},
    {categoria: "pareo", nombre: "sandia", color:"rojo", precio: 1300},
]


const ordenPedido = pedidoCliente01.sort(function(a,b){
    return (a.precio-b.precio);
})

console.log(ordenPedido);