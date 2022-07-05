
//--simulo un local gastronomico de venta de hambuburesas--//

//-- variables globales--//
    //--primero las fui declarando  y despues las ordene aca borrrandoles el let mas abajo--//

const burgerBacon= 800
const extra= 200
let result= 0
let domicilio
let cantBurger
let extraCarne
let pedido
let mensaje2
let carneExt
let medioPago
let busqueda
let bus
let filtrado
//--declare el array--//
let pedidos = []





function nuevoPedido() {
    pedido= {}
    alert("Bienvenido! elija que desea llevar \n Hamburguesa doble $800 con Extra carne $200. Si compras mas de 5 unidades te hacemos el 10%")
    domicilio = prompt("Ingrese su domicilio.");
    cantBurger = prompt("¿Cuantas Hamburguesas desea llevar?.")
    extraCarne = prompt("Queres agregar carne extra? (S) o (N)")
    pedido.id = Math.round(Math.random() * (1000 - 0) + 0)
    pedido.domicilio = domicilio
    pedido.cantidadBurger = cantBurger
    pedido.extraCarnes
    carneExtra(extraCarne, cantBurger,pedido)
    descuentoPorCantidad(cantBurger, pedido)


    pedidos.push(pedido)
    mensaje2 = prompt("¿Quieres realizar un pedido? (S) o (N)")
    if (mensaje2 === "s") {
        nuevoPedido()
    } else {
        alert("Gracias por tu compra, ¡QUE LO DISFRUTES!")
    }
}
const carneExtra= (value, cantBurger, pedido) =>{
    if (value=== "s") {
        carneExt= burgerBacon + extra
        pedido.extraCarne = "Si"
        for (let i = 1; i <= cantBurger; i++) { result = result + carneExt}
    }
        if (value === "n") {
            pedido.extraCarne ="No"
            for (let i = 1 ; i<=cantBurger; i++ ){result = result + burgerBacon}
                
            }
        }
        

    
    const descuentoPorCantidad = (value, pedido) => {
        if (value >= 5) {
    
            result = result - (result / 100) * 10
            medioPago = prompt("el total del pedido con descuento es  $" + result + "\n Pago en efectivo(E) o Tarjeta(T) ? \n el pago con tarjeta tiene un recargo del 5%  ")
            mediosDePago(medioPago, pedido)
        } else {
            medioPago = prompt("el total del pedido es  $" + result + "\n Pago en efectivo(E) o Tarjeta(T) ? \n el pago con tarjeta tiene un recargo del 5%")
            mediosDePago(medioPago, pedido)
        }
    }
    
    
    const mediosDePago = (value, pedido) => {
    
        if (value === "t") {
            result = result + (result / 100) * 5
            pedido.medioDePago = "Tarjeta"
            pedido.total = result
            alert("El total del pedido pagado con tarjeta es $: " + result)
            result = 0
    
        } else if (value === "e") {
            pedido.medioDePago = "Efectivo"
            pedido.total = result
            alert("El total del pedido es $: " + result)
            result = 0
    
        }
    
    }
    
    
    //-- este ultimo paso lo hice asi porq no sabia como incorporar las HOF a mi simulador--//
    
    nuevoPedido()
    busqueda = prompt("Realizar una busqueda por el precio")
    bus = pedidos.find(e => e.total == busqueda)
    
    console.log("Busqueda por precio")
    console.log(bus)
    
    console.log("Pedidos generados")
    const datos = pedidos.map(pedido => pedido)
    console.log(datos)
    
    console.log("Pedidos Filtrados")
    filtrado = pedidos.filter( e => e.total < 5000)
    console.log(filtrado);


    


    


















