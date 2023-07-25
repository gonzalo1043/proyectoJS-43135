let porcentaje = 0.90


function carrito () {
    const vinilos = [
        {
        id: 1,
        nombre: 'Amanecer Buho',
        artista: 'Buenos Muchachos',
        precio: 40,
        descuento: 'SI'
        },
        
        {
        id: 2,
        nombre: 'Final Cut',
        artista: 'Pink Floyd',
        precio: 35,
        descuento: 'SI'
        },
        
        {
        id:3,
        nombre: 'The rise and fall of Ziggy Stardust and the Spiders from Mars',
        artista: 'David Bowie',
        precio: 42,
        descuento: 'SI'
        },

        {
        id: 4,
        nombre: 'Parte de la Religion',
        artista: 'Charly Garcia',
        precio: 32,
        descuento: 'SI' 
        },

        {
        id:5,
        nombre: 'Nightclubbing',
        artista: 'Grace Jones',
        precio: 50,
        descuento: 'NO' 
        },

        {
        id:6,
        nombre: 'Superficie de Placer',
        artista: 'Virus',
        precio: 35,
        descuento: 'NO'
        },

        {
        id:7,
        nombre: 'Donde estan los ladrones',
        artista: 'Shakira',
        precio: 30,
        descuento: 'NO'
        },

        {
        id:8,
        nombre: 'Discutible',
        artista: 'Babasonicos',
        precio: 32,
        descuento: 'NO'
        },
    ]


    const carrito = [] 
    let botonesComprar = document.getElementsByClassName ('btn')

    for (const boton of botonesComprar) {
        boton.onclick = (e) => {
            let vinilosSeleccionados = vinilos.find ((vinilo) => vinilo.id === parseInt(e.target.id))
            alert (`Se agrego ${vinilosSeleccionados.nombre}`)
            
            vinilosSeleccionados.descuento == 'SI' ? vinilosSeleccionados.precio =(Math.round(vinilosSeleccionados.precio * porcentaje)) : vinilosSeleccionados.precio = vinilosSeleccionados.precio

            vinilosSeleccionados.descuento == 'SI' ? alert (`Debido a un descuento el precio de este vinilo queda en USD$${vinilosSeleccionados.precio}`) : alert (`El precio de este vinilo es de USD$${vinilosSeleccionados.precio}`)
            carrito.push(vinilosSeleccionados)
        }
    }
            
    let botonFinalizar = document.getElementById('finalizarCompra')
    botonFinalizar.onclick = () => {
        console.log(`Se cargo el carrito con ${carrito.length} unidades de productos`)
        localStorage.setItem ('carrito', JSON.stringify(carrito))
        
        sumaTotal = 0
        for (const vinilos of carrito) {
            sumaTotal += vinilos.precio
        }
        alert (`La suma total de su compra es de: USD$${sumaTotal}`)
        localStorage.setItem ('sumaTotal', sumaTotal)
        console.log (carrito)
    }

    let botonMostrarCarrito = document.getElementById ('mostrarCarrito')
    botonMostrarCarrito.onclick = () => {
        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))

        const nombreVinilos = carritoLocalStorage.map ((vinilo) => vinilo.nombre )
        
        const precioFinalLocalStorage = localStorage.getItem('sumaTotal')


        alert (`Los vinilos en el carrito son: ${nombreVinilos} y su precio es de: USD$ ${precioFinalLocalStorage}`)
    }
    
    function ElegirvinilosNuevos () {
        let submit = document.getElementById('submit');
        let nuevoVinilo = document.getElementById('nombreViniloNuevo')
        let nuevoArtista = document.getElementById('nombreArtista')
        class VinilosNuevos {
            constructor (nombre, artista) {
                this.nombre = nombre
                this.artista = artista
            }
        }
        let vinilosNuevos = []
        
        submit.onclick = () => {
            vinilosNuevos.push(new VinilosNuevos ((nuevoVinilo.value), (nuevoArtista.value)))
            localStorage.setItem ('encargo', JSON.stringify(vinilosNuevos))

        }
        let botonConfirmar = document.getElementById('confirmar')
        
        botonConfirmar.onclick = () => {
            for (const vinilo of vinilosNuevos) {
                alert (`A encargado el vinilo ${vinilo.nombre} del artista ${vinilo.artista}`)
        }
        }

        let botonEncargo = document.getElementById('encargo')

        botonEncargo.onclick = () => {
            const encargoLocalStorage = JSON.parse(localStorage.getItem('encargo'))

            for (const encargo of encargoLocalStorage) {
                alert (`Los vinilos encargados son ${encargo.nombre} del artista ${encargo.artista}`)
                let encargados = document.createElement('div')
                encargados.innerHTML = `<h3> A encargado el vinilo ${encargo.nombre} del artista ${encargo.artista} </h3>`
                document.body.append(encargados)
            }
        }
    }
    ElegirvinilosNuevos()
}
carrito()













