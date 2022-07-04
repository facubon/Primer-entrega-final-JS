//--- WEB orientada a venta de accesorios y componentes de computacion.--//


//---variables globales----//

let nombrePersona
let edad



//- Pido al usuario nombre-apellido y edad. Si el usuario es menor de edad no puede realizar la compra.-//

function datos(){
    nombrePersona =prompt(('Ingrese su nombre y apellido'));
    datos = alert ( "hola "+ nombrePersona + " bienvenido a TodoGaming")
    
    
    }
    
    datos()
    
    edad = parseInt (prompt('ingrese su edad:'))
    
    
    if (edad < 18){ 
        alert("Debes ser mayor de edad para realizar la compra") 
        edad = parseInt (prompt('ingrese su edad:')) 
    }

    function seleccionProductos(){
        prompt ("Seleccione los productos que desea comprar: \n 1-Auriculares Razer. (100usd) \n 2-Monitor curvo 24 pulgadas. (150usd) \n 3-Mouse Razer. (40usd) \n 4-Notebook MSI. (800usd) \n 5-Finalizar compra.")
        
    
    }
    seleccionProductos()







    //-- cree los productos usando objetos con un constructor--//
    function Producto (nombre,precio){
        this.nombre =nombre
        this.precio = precio
    }

    const PRODUCTO1 = new Producto ("Auriculares Razer",100)
    const PRODUCTO2 = new Producto ("Monitor curvo de 24 pulgadas",150)
    const PRODUCTO3 = new Producto ("Mouse Razer", 40)
    const PRODUCTO4 = new Producto ("Notebook MSI",800)










