const zapatillas = [
    {nombre: "Nike", precio: 100},
    {nombre: "Adidas", precio: 90},
    {nombre: "Reebok", precio: 70},
    {nombre: "Puma", precio: 50},
    {nombre: "Topper", precio: 30},
];

let carrito = []

let seleccion = prompt("Hola! Desea comprar zapatillas?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresá SI o NO para poder ayudarte")
    seleccion = prompt("Hola! Desea comprar zapatillas?")
}

if(seleccion == "si"){
    alert("Te dejo nuestra lista de marcas disponibles")
    let todaslasMarcas = zapatillas.map((zapatillas) => zapatillas.nombre + " ");
    alert(todaslasMarcas.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por visitarnos, esperamos que vuelvas pronto!")
}

