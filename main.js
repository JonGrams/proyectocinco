const zapatillas = [
    {nombre: "Nike Shox", precio: 100},
    {nombre: "Adidas Running", precio: 90},
    {nombre: "Reebok Flash", precio: 70},
    {nombre: "Puma Light", precio: 50},
    {nombre: "Topper Clasicas", precio: 30},
];

let carrito = []

let seleccion = prompt("Hola! Desea comprar zapatillas?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresá SI o NO para poder ayudarte")
    seleccion = prompt("Hola! Desea comprar zapatillas?")
}

if(seleccion == "si"){
    alert("Te dejo nuestra lista de modelos disponibles")
    let todaslasMarcas = zapatillas.map((zapatillas) => zapatillas.nombre + " ");
    alert(todaslasMarcas.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por visitarnos, esperamos que vuelvas pronto!")
}

while(seleccion != "no"){
    let zapatillas = prompt("Elegi uno de los modelos para agregar a tu carrito")
    let precio = 0

    if(zapatillas == "Nike Shox" | |  zapatillas == "Adidas Running"  | | zapatillas == "Reebok Flash"  | | zapatillas == "Puma Light" | | zapatillas == "Topper Clasicas" ){
        switch (zapatillas) {
            case "Nike Shox":
                precio = 100;
                break;
            case "Adidas Running":
                precio = 90;
                break;
            case "Reebok Flash":
                precio = 70;
                break;
            case "Puma Light":
                precio = 50;
                break;  
            case "Topper Clasicas":
                precio = 30;
                break;
            default: 
                break;     
        }
    let cantidad = parseInt(prompt("Qué cantidad de pares de este modelo desea?"))

    carrito.push({zapatillas, cantidad, precio})
    console.log(carrito)
    } else {
        alert("El modelo que desea no se encuentra disponible")
    }

    seleccion = prompt("Desea seguir comprando?")
    
    while(seleccion === "no"){
        alert("Gracias por elegirnos! Esperamos que vuelvas pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`zapatillas: ${carritoFinal.zapatillas}, cantidad: ${carritoFinal.cantidad}, total a pagar: ${carritoFinal.cantidad * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((ecc, el) => acc + el.precio * el.cantidad, 0)
console.log(`El total a pagar por su compra es: ${total}`) 