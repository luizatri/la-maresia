

// Pedir nombre

let nombreUsuario = prompt("Bienvenid@! Ingrese tu nombre:");

// Eliminar párrafo existente

let primerParrafo = document.getElementById ("index__parrafoBienvenidos");

primerParrafo.parentNode.removeChild (primerParrafo);


// Agregar nuevo párrafo

const padreParrafo = document.getElementById ("index__textoBienvenidos");

const textos = [
    `Hola ${nombreUsuario}! Abrimos las fronteras y llevamos los productos de beachwear más exclusivos y autenticos de Brasil para toda Latinoamérica. Colección de verano 2022 ya disponible.` 
]

for (let texto of textos) {
    let p = document.createElement("p")
    p.innerHTML = texto;
    
    padreParrafo.appendChild(p);
}


// Eliminar elemento card

let cardProducto = document.getElementsByClassName ("card")
console.log (cardProducto); 

cardProducto[1].parentNode.removeChild (cardProducto[1]);

// Agregar lista de productos 

const productos = [
    "Bikínis",
    "Enterizas",
    "Pareos",
    "Ojotas",
    "Sombreros",
]


for (let producto of productos) {
    let li = document.createElement("li")
    li.innerHTML = producto;
    
    padreParrafo.appendChild(li);
}
