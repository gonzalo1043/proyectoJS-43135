
let porcentaje = 0.90
function carrito () {

    // Vinilos para comprar Vinilos para comprarVinilos para comprarVinilos para comprar
    // Vinilos para comprar Vinilos para comprar Vinilos para comprar Vinilos para comprar
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


    
    //CAMBIO DE PRECIO PARA VINILOS CON DESCUENTO
    let vinilosDescuentoPrecio = vinilos.filter((d) => d.descuento.includes('SI'))
    for (const vinilo of vinilosDescuentoPrecio) {
        vinilo.precio = Math.round (vinilo.precio * porcentaje)
    }
    
    // SWEET ALERT VINILOS CON DESCUENTO.
    // SWEET ALERT VINILOS CON DESCUENTO.
    let botonDescuento = document.getElementById('descuento')
    botonDescuento.onclick = () => {
        let vinilosDescuento = vinilos.filter((v) => v.descuento.includes('SI'));

        let vinilosPrueba = []

        vinilosDescuento.forEach ((vinilo) => {
            vinilosPrueba.push(`${vinilo.nombre} , precio: USD$ ${vinilo.precio}`)
        })

        swal ({
            title: 'VINILOS CON DESCUENTO',
            text: `LOS VINILOS CON DESCUENTO SON: \n ${vinilosPrueba.join('\n')} `
        })
    }



    // BOTON COMPRAR DE CADA VINILO
    const carrito = [] 
    let botonesComprar = document.getElementsByClassName ('botonComprar')
    for (const boton of botonesComprar) {
        boton.onclick = (e) => {
            let vinilosSeleccionados = vinilos.find ((vinilo) => vinilo.id === parseInt(e.target.id))

            vinilosSeleccionados.descuento == 'SI' ? 
            swal({
                title: `¿Desea agregar el vinilo al carrito?`,
                text: `Por un descuento el vinilo ${vinilosSeleccionados.nombre} tiene un precio de: USD$ ${vinilosSeleccionados.precio}`,
                    buttons: ['Cancelar', 'Aceptar'],
            }).then((respuesta) => {
                if(respuesta){
                    carrito.push(vinilosSeleccionados)
                        console.log(carrito)
                }
            }) : swal({
                title: `¿Desea agregar el vinilo al carrito?`,
                text: `${vinilosSeleccionados.nombre}, precio: ${vinilosSeleccionados.precio}`,
                buttons: ['Cancelar', 'Aceptar'],
            }).then((respuesta) => {
                if(respuesta) {
                    carrito.push(vinilosSeleccionados)
                    console.log(carrito)
                }
            })
        }
    }


    //BOTON GUARDAR COMPRA
    //BOTON GUARDAR COMPRA
    let botonGuardarCompra = document.getElementById('guardarCompra')
    botonGuardarCompra.onclick = () => {
        localStorage.setItem ('carrito', JSON.stringify(carrito))
        
        sumaTotal = 0
        for (const vinilos of carrito) {
            sumaTotal += vinilos.precio
        }
        swal({
            title: 'Se ha guardado su compra',
            icon: 'success',
            text: `Ir al carrito para continuar`,
            buttons: ['Cancelar', 'Aceptar']
        })
        localStorage.setItem ('sumaTotal', sumaTotal)
        console.log (carrito)
    }

    //BOTON CARRITO
    //BOTON CARRITO
    let botonMostrarCarrito = document.getElementById ('mostrarCarrito')
    botonMostrarCarrito.onclick = () => {

        function tiempoDeEspera() {
            return new Promise((resolve, reject) => {
                setTimeout(()=>{
                    if (carritoLocalStorage){
                        resolve(finalizarCompra)
                    } else {
                        reject('No tiene ningun vinilo en el carrito')
                    }
                }, 1000)
                })
        }
        const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito'))
        
        function finalizarCompra () {
            const nombreVinilos = carritoLocalStorage.map ((vinilo) => vinilo.nombre).join('\n')
            const precioFinalLocalStorage = localStorage.getItem('sumaTotal')

            swal({
                title: 'CARRITO',
                text: `Los vinilos en el carrito son: \n ${nombreVinilos} \n su precio es de: USD$ ${precioFinalLocalStorage}`,
                buttons: ['Cancelar', 'Finzalizar compra']
            }).then((resultado) => {
                if (resultado) {
                    swal({
                        title: 'Su compra ha sido realizada con exito.',
                        icon: 'success',
                    }).then((resultado) => {
                        if (resultado) {
                            Toastify({
                                text: 'Gracias por comprar en nuestro sitio web :)',
                                style: {
                                    backgroud: '#FFC600'
                                },
                                duration: 3000,
                            }).showToast();
                        }
                    })
                localStorage.clear();
        }
        })
        }
        
        let spinner = document.getElementById('spinner')
        spinner.style.display = 'grid'
        
        tiempoDeEspera().then(() => {
            spinner.style.display = 'none'
            finalizarCompra()
        }).catch ((error) => {
            spinner.style.display = 'none'
            swal({
                title: 'CARRITO',
                text: error
            })
        })
    }


    // PROXIMOS VINILOS
    // PROXIMOS VINILOS
    
    function proximosVinilos() {
        
        const reservados = []
        
        let boton = document.getElementById ('proximosVinilos')
        boton.onclick = () => {
            
            let spinner = document.getElementById('spinner2')
            spinner.style.display = 'grid'
        
            async function vinilosProximos () {
            const proximos = await fetch ('./data.json')
            const vinilosProximosArray = await proximos.json()
            
            for (const vinilos of vinilosProximosArray) {
                let contenedor = document.createElement('div')
                contenedor.innerHTML = `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src= "${vinilos.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${vinilos.nombre} - ${vinilos.artista} </h5>
                            <p class="precio">USD$ ${vinilos.precio} </p>
                            <button id = ${vinilos.id} class="btn btn-primary botonComprar botonReservar">RESERVAR</button class="">
                        </div>
                    </div>
                </div>
                `
                document.querySelector ('#divProximosVinilos').appendChild(contenedor)
            }
            
            //BOTON RESERVAR
            let botonesReservar = document.getElementsByClassName('botonReservar')
            for (const reservarbtn of botonesReservar) {
                reservarbtn.onclick = (e) => {
                    let vinilosReservados = vinilosProximosArray.find ((vinilo) => vinilo.id === parseInt(e.target.id))
                    swal({
                        title: `¿Desea reservar este vinilo?`,
                        text: `${vinilosReservados.nombre}, precio: USD$ ${vinilosReservados.precio}`,
                        buttons: ['Cancelar', 'Aceptar'],
                    }).then((respuesta) => {
                        if(respuesta) {
                            reservados.push(vinilosReservados)
                            console.log(reservados)
                        }
                    })
                }
            }
            
            //CONFIRMAR RESERVA
            let botonConfirmarReserva = document.createElement('button')
            botonConfirmarReserva.className = 'btn btn-primary'
            botonConfirmarReserva.innerText = 'CONFIRMAR RESERVA'
            document.querySelector('.botonConfirmarReserva').appendChild(botonConfirmarReserva)

            botonConfirmarReserva.onclick = () => {
                const nombreR = reservados.map ((vinilos) => vinilos.nombre).join('\n')
                swal({
                    title: 'Se ha guardado su reserva',
                    icon: 'success',
                }).then ((respuesta) => {
                    if(respuesta) {
                        swal({
                            title: 'RESERVAS',
                            text: `Los vinilos reservados son: \n ${nombreR}`,
                            buttons: ['Cancelar', 'Confirmar reserva'],
                        }).then ((respuesta) => {
                            if(respuesta) {
                                
                                localStorage.setItem ('reservas', JSON.stringify(reservados))
                                
                                Toastify({
                                    text: 'Vinilos reservados',
                                style: {
                                    backgroud: '#FFC600'
                                },
                                duration: 4000,
                                }).showToast()
                            }
                        })
                    }
                })
                }
            //VER RESERVA
                let botonVerReserva = document.createElement('button')
                botonVerReserva.className = 'btn btn-primary'
                botonVerReserva.innerText = 'VER RESERVA'
                document.querySelector('.verVinilosReservados').appendChild(botonVerReserva)
                
                botonVerReserva.onclick = () => {

                function tiempoDeEsperaReserva() {
                    return new Promise((resolve, reject) => {
                        setTimeout(()=>{
                            if (reservadosLocalStorage){
                                resolve(verReserva)
                            } else {
                                reject('No tiene ningun vinilo reservado')
                            }
                        }, 500)
                        })
                }
                const reservadosLocalStorage = JSON.parse(localStorage.getItem('reservas'))
                
                function verReserva () {
                const nombreReservados = reservadosLocalStorage.map ((vinilos) => vinilos.nombre).join('\n')
                swal({
                    title: 'RESERVAS',
                    text: `Los vinilos reservados son: \n ${nombreReservados}`
                })
                }

                tiempoDeEsperaReserva().then(() => {
                    verReserva()
                }).catch ((error) => {
                    swal({
                        title: 'RESERVAS',
                        text: error
                    })
                })
            }
            spinner.style.display='none'
            
        }vinilosProximos()
        }
        }
    proximosVinilos()

    //ELEGIR VINILOS NUEVOS
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
        

        //BOTON AGREGAR
        submit.onclick = () => {
            vinilosNuevos.push(new VinilosNuevos ((nuevoVinilo.value), (nuevoArtista.value)))

            swal({
                icon: 'success',
            })
        }
        
        //BOTON CONFIRMAR
        let botonConfirmar = document.getElementById('confirmar')
        botonConfirmar.onclick = () => {

        localStorage.setItem ('encargo', JSON.stringify(vinilosNuevos))
        
        let vinilosConfirmados = []

        vinilosNuevos.forEach ((vinilos) => {
            vinilosConfirmados.push(`${vinilos.nombre} del artista ${vinilos.artista}`)
        })

        // let vinilosConfirmadosNombre = vinilosNuevos.map((vinilos) => vinilos.nombre).join('\n')

        swal ({
            title: 'VINILOS ENCARGADOS',
            text: `Encargo los vinilos ${vinilosConfirmados.join('\n')}`,
            icon: 'success',
        })
        }

        // BOTON ENCARGADOS 
        let botonEncargo = document.getElementById('encargo')
        botonEncargo.onclick = () => {
            const encargoLocalStorage = JSON.parse(localStorage.getItem('encargo'))

            function tiempoDeEsperaEncargos () {
                return new Promise ((resolve, reject) => {
                    setTimeout(() => {
                        if (encargoLocalStorage) {
                            resolve(verEncargados)
                        } else {
                            reject('No ha encargado ningun vinilo')
                        }
                    }, 500);
                })
            }
            function verEncargados() {            
            
            for (const encargo of encargoLocalStorage) {
                let encargados = document.createElement('div')
                encargados.innerHTML = `<h3> A encargado el vinilo ${encargo.nombre} del artista ${encargo.artista} </h3>`
                document.querySelector('.vinilosEncargados').append(encargados)
            }
            }
            tiempoDeEsperaEncargos().then(() => {
                verEncargados()
            }).catch((error) => {
                swal ({ 
                    title: 'ENCARGADOS',
                    text: error
                })
            })
        }
    }
    ElegirvinilosNuevos()
}
carrito()












