let porcentaje = 0.90

function Elegirvinilos () {
    let vinilos = []
    let vinilosSinDescuento = []
    let vinilo1 = 
        {nombre: 'Amanecer Buho',
        artista: 'Buenos Muchachos',
        precio: 40,
        descuento: 'SI'}

    let vinilo2 =
        {nombre: 'Final Cut',
        artista: 'Pink Floyd',
        precio: 35,
        descuento: 'SI'}

    let vinilo3 = 
        {nombre: 'The rise and fall of Ziggy Stardust and the Spiders from Mars',
        artista: 'David Bowie',
        precio: 42,
        descuento: 'SI'}
    
    let vinilo4 =
        {nombre: 'Parte de la Religion',
        artista: 'Charly Garcia',
        precio: 32,
        descuento: 'SI'}

    let vinilo5 =
        {nombre: 'Nightclubbing',
        artista: 'Grace Jones',
        precio: 50,
        descuento: 'NO' }

    let vinilo6 =
        {nombre: 'Superficie de Placer',
        artista: 'Virus',
        precio: 35,
        descuento: 'NO'}

    let vinilo7 =
        {nombre: 'Donde estan los ladrones',
        artista: 'Shakira',
        precio: 30,
        descuento: 'NO'}

    let vinilo8 =
        {nombre: 'Discutible',
        artista: 'Babasonicos',
        precio: 32,
        descuento: 'NO'}
    
    let todosLosVinilos = [vinilo1, vinilo2, vinilo3,vinilo4,vinilo5,vinilo6,vinilo7,vinilo8]
    let entrada = ''
    
    let filtro = prompt ('Escriba DESCUENTO si quiere ver nuestros vinilos que tienen 10% de descuento o ESC para continuar con la compra')
        if (filtro === 'DESCUENTO') {
            const descuento = todosLosVinilos.filter ((vinilo) => vinilo.descuento.includes('SI'));
            for (const vinilo of descuento) {
                alert ('Los vinilos con descuento son: ' + vinilo.nombre)
            }
        } 

        if (filtro == 'ESC'){
            entrada = prompt ('ESCRIBE UN NUMERO DEL 1 AL 8 PARA ELIGIR UN VINILO. Escriba ESC para salir o para encargar nuevos vinilos si desea hacerlo')
        }

    
    while (entrada != 'ESC') {
        if (entrada === '1') {
            vinilos.push(vinilo1)            
                alert ('Usted a seleccionado el vinilo '+ vinilo1.nombre + ' del artista ' + vinilo1.artista + ' y su precio es: USD$ ' + vinilo1.precio)
        }
    
        if (entrada === '2') {
            vinilos.push (vinilo2)
            alert ('Usted a seleccionado el vinilo '+ vinilo2.nombre + ' del artista ' + vinilo2.artista + ' y su precio es: USD$ ' + vinilo2.precio)
        }

        if (entrada === '3') {
            vinilos.push (vinilo3)
            alert ('Usted a seleccionado el vinilo '+ vinilo3.nombre + ' del artista ' + vinilo3.artista + ' y su precio es: USD$ ' + vinilo3.precio)
        }

        if (entrada === '4') {
            vinilos.push (vinilo4)
            alert ('Usted a seleccionado el vinilo '+ vinilo4.nombre + ' del artista ' + vinilo4.artista + ' y su precio es: USD$ ' + vinilo4.precio)
        }

        if (entrada === '5') {
            vinilosSinDescuento.push (vinilo5)
            alert ('Usted a seleccionado el vinilo '+ vinilo5.nombre + ' del artista ' + vinilo5.artista + ' y su precio es: USD$ ' + vinilo5.precio)
        }

        if (entrada === '6') {
            vinilosSinDescuento.push (vinilo6)
            alert ('Usted a seleccionado el vinilo '+ vinilo6.nombre + ' del artista ' + vinilo6.artista + ' y su precio es: USD$ ' + vinilo6.precio)
        }

        if (entrada === '7') {
            vinilosSinDescuento.push (vinilo7)
            alert ('Usted a seleccionado el vinilo '+ vinilo7.nombre + ' del artista ' + vinilo7.artista + ' y su precio es: USD$ ' + vinilo7.precio)
        }

        if (entrada === '8') {
            vinilosSinDescuento.push (vinilo8)
            alert ('Usted a seleccionado el vinilo '+ vinilo8.nombre + ' del artista ' + vinilo8.artista + ' y su precio es: USD$ ' + vinilo8.precio)
        }
    
        entrada = prompt ('ESCRIBE UN NUMERO DEL 1 AL 8 PARA ELIGIR UN VINILO. Escriba ESC para salir o ENCARGAR NUEVOS VINILOS si desea hacerlo')
    }
    
    let sumaTotal = 0
    for (const vinilo of vinilos) {
        alert ('A seleccionado el vinilo: ' + vinilo.nombre)
        alert ('Debido a un descuento del 10% cada vinilo le queda en: USD$ ' + Math.round(vinilo.precio * porcentaje))
        sumaTotal += Math.round(vinilo.precio * porcentaje)
    }
    for (const vinilo of vinilosSinDescuento) {
        alert ('A seleccionado el vinilo: ' + vinilo.nombre)
        alert ('Este vinilo no poseen descuento por lo que el precio se mantiene en: USD$ ' + vinilo.precio)
        sumaTotal += vinilo.precio
    }

    alert ('El precio total de su compra es de: $USD ' + sumaTotal)

    let entrada2 = prompt ('Escriba ENCARGAR VINILOS si desea hacerlo o ESC para salir')
    while (entrada2 != 'ESC') {
        if (entrada2 == 'ENCARGAR VINILOS') {
            class VinilosNuevos {
                constructor (nombre, artista) {
                    this.nombre = nombre
                    this.artista = artista
                }
            }
            let vinilosNuevos = []
            let entrada = ''
            while (entrada != 'ESC') {
                let nombre = prompt ('Ingrese nombre del disco que desee')
                let artista = prompt ('Ingrese artista o banda')
                vinilosNuevos.push (new VinilosNuevos (nombre, artista))
                entrada = prompt ('Escriba ESC para salir o CONTINUAR si desea encargar otros vinilos')
            }
            for (const vinilo of vinilosNuevos) {
        alert ('Usted a encargado los vinilos: ' + vinilo.nombre + ' del artista ' + vinilo.artista)
        }
        alert ('Los vinilos han sido encargados. Gracias por usar nuestra pagina web')
        }
            entrada2 = 'ESC'
        }
}
Elegirvinilos()

















