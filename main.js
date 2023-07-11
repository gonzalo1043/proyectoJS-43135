
let precioVinilo = 0
let precioVinilo1 = 40
let precioVinilo2 = 45
let precioVinilo3 = 50
let precioVinilo4 = 35
let porcentaje = 0.90
let porcentaje2 = 0.80
let sumaTotal = 0 
let entrada = prompt ('Ingresar del 1 al 4 segun el vinilo o presione ESC para salir y encargar otros vinilos si asi lo desea')
let entrada2 = ''


function descuento (sumaTotal, porcentaje) { 
    return sumaTotal * porcentaje
}

function nuevosVinilos () {
    class VinilosNuevos {
        constructor (nombre, artista) {
            this.nombre = nombre
            this.artista = artista
        }
    }
    let vinilosNuevos = []
    entrada2 += prompt ('Puede escribir aqui otros vinilos que desee y lo encargaremos para usted. Presione ESC para salir')
    while (entrada2 != 'ESC') {
        let artista = prompt ('Ingresar nombre de la banda o artista')
        vinilosNuevos.push (new VinilosNuevos (entrada2, artista))
        entrada2 = prompt ('Puede escribir aqui otros vinilos que desee y lo encargaremos para usted. Presione ESC para salir')
    }
    for (const vinilo of vinilosNuevos) {
        alert ('Usted a encargado los vinilos: ' + vinilo.nombre + ' del artista ' + vinilo.artista)
        }
    alert ('Los vinilos han sido encargados. Gracias por usar nuestra pagina web')
}

function seleccionVinilos () {
    while ((entrada != 'ESC') || (entrada != '') ) {
        switch(entrada) {
            //seleccion un vinilo
            case '1':
                alert ('Eligio el vinilo Amanecer Buho, su precio es USD$ ' + precioVinilo1)
                sumaTotal = precioVinilo1
                
                let resultadoDescuento = descuento (sumaTotal, porcentaje)
                alert ('Debido a un descuento del 10% el vinilo quedaría en $USD ' + resultadoDescuento)
                entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir');

                //seleccion dos vinilos
                while (entrada != 'ESC'){
                    switch (entrada){
                    case '2':
                        sumaTotal =  precioVinilo1 + precioVinilo2;
                        alert ('Eligio el vinilo Amanecer Buho y Final Cut, su precio es $USD ' + sumaTotal)
                        let resultadoDescuento1y2 = descuento (sumaTotal, porcentaje)
                        alert ('debido a un descuento le queda en ' + resultadoDescuento1y2)
                        entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')   

                        // seleccion tres vinilos
                        while (entrada != 'ESC') {
                            switch (entrada) {
                                case '3':
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3
                                    alert ('Eligio el vinilo Amanecer Buho, Final Cut y The Rise and Fall of Ziggy Stardust and the Spiders from Mars su precio es $USD ' + sumaTotal)
                                    
                                    let resultadoDescuento12y3 = descuento (sumaTotal,porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento12y3)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir') 
                            //seleccion cuatros vinilos
                            while (entrada != 'ESC') { 
                                switch (entrada){
                                case '4': 
                                sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                        
                                        
                                let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                break;
                                default: 
                                    while (entrada2 != 'ESC')
                                    {nuevosVinilos()}
                                }
                                }
                                break;
                        //seleccion tres vinilos
                                case '4': 
                                sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo4
                                alert ('Eligio el vinilo Amanecer Buho, Final Cut y Parte de la Religion su precio es $USD ' + sumaTotal )
                                
                                let resultadodescuento12y4 = descuento (sumaTotal, porcentaje)
                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento12y4)
                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')  
                                
                                //seleccion cuatros vinilos
                                while (entrada != 'ESC') { 
                                    switch (entrada){
                                    case '3': 
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                    
                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                    entrada = prompt ('Presione ESC para salir')                       
                                    break;
                                    default:
                                        while (entrada2 != 'ESC')
                                        {nuevosVinilos()}
                                    }
                                } 
                            break;
                    default:
                    while (entrada2 != 'ESC')
                    {nuevosVinilos()}
                            }
                        }  
                break;
                    
                    //seleccion dos vinilos
                    case '3':
                        sumaTotal =  precioVinilo1 + precioVinilo3;
                        alert ('Eligio el vinilo Amanecer Buho y The Rise and Fall of Ziggy Stardust and the Spiders from Mars, su precio es $USD ' + sumaTotal)
                        
                        let resultadoDescuento1y3 = descuento (sumaTotal, porcentaje)
                        alert ('debido a un descuento le queda en ' + resultadoDescuento1y3)
                        entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                       

                        //seleccion tres vinilos
                        while (entrada != 'ESC') {
                            switch (entrada) {
                                case '2':
                                    sumaTotal = precioVinilo1 + precioVinilo3 + precioVinilo2
                                    alert ('Eligio el vinilo Amanecer Buho, The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Final Cut su precio es $USD ' + sumaTotal)
                                    
                                    let resultadoDescuento13y2 = descuento (sumaTotal,porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento13y2)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                    
                                    //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '4': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while (entrada!='ESC') {
                                                nuevosVinilos()
                                            }
                                        }
                                    }  
                                    nuevosVinilos()
                                break;
                                //seleccion tres vinilos
                                case '4': 
                                    sumaTotal = precioVinilo1 + precioVinilo3 + precioVinilo4
                                    alert ('Eligio el vinilo Amanecer Buho, The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Parte de la Religion su precio es $USD ' + sumaTotal )
                                    
                                    let resultadodescuento13y4 = descuento (sumaTotal, porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento13y4)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                    
                                    //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '2': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while (entrada!='ESC') {
                                                nuevosVinilos()
                                            }
                                        }
                                    } 
                                break;
                                default:
                                    while (entrada2 != 'ESC') {
                                        nuevosVinilos()
                                    }
                            }
                        }
                        break;
                        //seleccion dos vinilos
                        case '4':
                        sumaTotal =  precioVinilo1 + precioVinilo4;
                        alert ('Eligio el vinilo Amanecer Buho y Parte de la Religion, su precio es $USD ' + sumaTotal)
                        
                        let resultadoDescuento1y4 = descuento (sumaTotal, porcentaje)
                        alert ('debido a un descuento le queda en ' + resultadoDescuento1y4)
                        entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
                        

                        //seleccion tres vinilos
                        while (entrada != 'ESC') {
                            switch (entrada) {
                                case '2':
                                    sumaTotal = precioVinilo1 + precioVinilo4 + precioVinilo2
                                    alert ('Eligio el vinilo Amanecer Buho, Parte de la Religion y Final Cut su precio es $USD ' + sumaTotal)
                                    
                                    let resultadoDescuento14y2 = descuento (sumaTotal,porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento14y2)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                    
                                    //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '3': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while(entrada2!='ESC'){
                                                nuevosVinilos()
                                            }
                                        }
                                    } 
                                break;
                                //seleccion tres vinilos
                                case '3': 
                                    sumaTotal = precioVinilo1 + precioVinilo4 + precioVinilo3
                                    alert ('Eligio el vinilo Amanecer Buho, Parte de la Religion y The Rise and Fall of Ziggy Stardust and the Spiders from Mars su precio es $USD ' + sumaTotal )
                                    
                                    let resultadodescuento14y3 = descuento (sumaTotal, porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento14y3)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                    
                                    //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '2': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while(entrada2!='ESC'){
                                                nuevosVinilos()
                                            }
                                        }
                                    }
                                break;
                                default:
                                    while(entrada2!='ESC') {
                                        nuevosVinilos()
                                    }
                            }
                        }
                    break;
                    default:
                        while (entrada2 =! 'ESC') {
                            nuevosVinilos()
                        }
                    }
                }
                break;
                //Seleccion un vinilo
            case '2':
            alert ('Eligio el vinilo Final Cut, su precio es USD$ ' + precioVinilo2)
            sumaTotal = precioVinilo2
                    
            let resultadoDescuento2 = descuento (sumaTotal, porcentaje)
            alert ('Debido a un descuento del 10% el vinilo quedaría en $USD' + resultadoDescuento2)
            entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')
                    
                //Seleccion dos vinilos
                while (entrada != 'ESC'){
                switch (entrada){
                    case '1':
                    sumaTotal =  precioVinilo2 + precioVinilo1;
                                        
                    let resultadoDescuento2y1 = descuento (sumaTotal, porcentaje)
                    alert ('A elegido los vinilos Final Cut y Amanecer Buho, debido a un descuento le queda en ' + resultadoDescuento2y1)
                    entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
                                        
    
                    //seleccion 3 vinilos
                    while (entrada != 'ESC') {
                    switch (entrada) {
                        case '3':
                        sumaTotal = precioVinilo2 + precioVinilo1 + precioVinilo3
                        alert ('Eligio el vinilo Final Cut, Amanecer Buho y The Rise and Fall of Ziggy Stardust and the Spiders from Mars su precio es $USD ' + sumaTotal)
                                                    
                        let resultadoDescuento21y3 = descuento (sumaTotal,porcentaje)
                        alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento21y3)
                        entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                                    
                                //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                    switch (entrada){
                                    case '4': 
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                    entrada = prompt ('Presione ESC para salir')                       
                                    break;
                                    default:
                                        while(entrada2!='ESC'){
                                            nuevosVinilos()
                                        }
                                    }
                                }
                                nuevosVinilos()
                            break;
    
                        //seleccion tres vinilos
                            case '4': 
                                sumaTotal = precioVinilo2 + precioVinilo1 + precioVinilo4
                                alert ('Eligio el vinilo Final Cut, Amanecer Buho y Parte de la Religion su precio es $USD ' + sumaTotal )
                                                    
                                let resultadodescuento21y4 = descuento (sumaTotal, porcentaje)
                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento21y4)
                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                                    
                                //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                    switch (entrada){
                                    case '3': 
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                    entrada = prompt ('Presione ESC para salir')                       
                                    break;
                                    default:
                                        while(entrada2=!'ESC'){
                                            nuevosVinilos()
                                        }
                                    }
                                        }
                            break;
                            default:
                                while(entrada2!='ESC'){
                                    nuevosVinilos()
                                }
                            }
                        }
                        break;
                    //seleccion dos vinilos
                    case '3':
                    sumaTotal =  precioVinilo2 + precioVinilo3;
                                        
                    let resultadoDescuento2y3 = descuento (sumaTotal, porcentaje)
                    alert ('A elegido los vinilos Final Cut y The Rise and Fall of Ziggy Stardust and the Spiders from Mars, debido a un descuento le queda en ' + resultadoDescuento2y3)
                    entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
                                        
    
                        //Seleccion tres vinilos 
                        while (entrada != 'ESC') {
                            switch (entrada) {
                                case '1':
                                    sumaTotal = precioVinilo2 + precioVinilo3 + precioVinilo1
                                    alert ('Eligio el vinilo Final Cut, The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Amanecer Buho y su precio es $USD ' + sumaTotal)
                                                    
                                    let resultadoDescuento23y1 = descuento (sumaTotal,porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento23y1)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                                    
                                    //seleccion cuatros vinilos
                                        while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '4': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while(entrada2!='ESC'){
                                                nuevosVinilos()
                                            }
                                        break;
                                        }
                                    }
                                break;
                        //Seleccion tres vinilos
                                case '4': 
                                    sumaTotal = precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('Eligio el vinilo Final Cut, The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Parte de la Religion su precio es $USD ' + sumaTotal )
                                                    
                                    let resultadodescuento23y4 = descuento (sumaTotal, porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento23y4)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                                    
                                    //seleccion cuatros vinilos
                                        while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '1': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while(entrada2!='ESC') {
                                                nuevosVinilos()
                                            }
                                        break;
                                        }
                                    }
                                break;
                                default:
                                    while(entrada2!='ESC'){
                                        nuevosVinilos()
                                    }
                                break;
                            }
                        }
                        break;
                                    
                    //seleccion dos vinilos
                    case '4':
                        sumaTotal =  precioVinilo2 + precioVinilo4;
                        alert ('Eligio el vinilo Final Cut y Parte de la Religion')
                                        
                        let resultadoDescuento2y4 = descuento (sumaTotal, porcentaje)
                        alert ('debido a un descuento le queda en ' + resultadoDescuento2y4)
                        entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
                                        
    
                        //seleccion tres vinilos
                        while (entrada != 'ESC') {
                            switch (entrada) {
                                case '1':
                                    sumaTotal = precioVinilo2 + precioVinilo4 + precioVinilo1
                                    alert ('Eligio el vinilo Final Cut, Parte de la Religion y Amanecer Buho y su precio es $USD ' + sumaTotal)
                                                    
                                    let resultadoDescuento24y1 = descuento (sumaTotal,porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento24y1)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                                    
                                //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                    switch (entrada){
                                    case '3': 
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                    entrada = prompt ('Presione ESC para salir')                       
                                    break;
                                    default:
                                        while(entrada2!='ESC') {
                                            nuevosVinilos()
                                        }
                                    break;
                                    }
                                }
                                break;
                                //seleccion tres vinilos
                                case '3': 
                                    sumaTotal = precioVinilo2 + precioVinilo4 + precioVinilo3
                                    alert ('Eligio el vinilo Final Cut, Parte de la Religion y The Rise and Fall of Ziggy Stardust and the Spiders from Mars su precio es $USD ' + sumaTotal )
                                                    
                                    let resultadodescuento24y3 = descuento (sumaTotal, porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento24y3)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')                        
                                                    
                                    //seleccion cuatros vinilos
                                        while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '1': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while(entrada!='ESC') {
                                                nuevosVinilos()
                                            }
                                        }
                                    }
                                break;
                                default:
                                    while(entrada2!='ESC') {
                                        nuevosVinilos()
                                    }
                                break;
                                            }
                                        }
                            break;
                            default:
                                while (entrada2!='ESC'){
                                    nuevosVinilos()
                                }
                            break;
                            }
                    }
                break;
                //seleccion un vinilos
            case '3':
            alert ('Eligio el vinilo The Rise and Fall of Ziggy Stardust and the Spiders from Mars, su precio es USD$ ' + precioVinilo3)
            sumaTotal = precioVinilo3
                        
            let resultadoDescuento3 = descuento (sumaTotal, porcentaje)
            alert ('Debido a un descuento del 10% el vinilo quedaría en $USD' + resultadoDescuento3)
            entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
    
                //seleccion dos vinilos
                while (entrada != 'ESC') {
                switch (entrada){
                    case '1':
                        sumaTotal =  precioVinilo3 + precioVinilo1;
                                    
                        let resultadoDescuento3y1 = descuento (sumaTotal, porcentaje)
                        alert ('A elegido los vinilos The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Amanecer Buho, debido a un descuento le queda en ' + resultadoDescuento3y1)
                        entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
    
                    //seleccion tres vinilos
                    while (entrada != 'ESC') {
                    switch (entrada) {
                        case '2':
                            sumaTotal = precioVinilo3 + precioVinilo1 + precioVinilo2
                            alert ('Eligio el vinilo The Rise and Fall of Ziggy Stardust and the Spiders from Mars, Amanecer Buho y Final Cut su precio es $USD ' + sumaTotal)
                                                
                            let resultadoDescuento31y2 = descuento (sumaTotal,porcentaje)
                            alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento31y2)
                            entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')
                                                
                            //seleccion cuatros vinilos
                                while (entrada != 'ESC') { 
                                switch (entrada){
                                case '4': 
                                sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                    
                                let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                entrada = prompt ('Presione ESC para salir')                       
                                break;
                                default:
                                    while(entrada2!='ESC') {
                                        nuevosVinilos()
                                    }
                                }
                            }  
                        break;
                            //seleccion tres vinilos
                            case '4': 
                                sumaTotal = precioVinilo3 + precioVinilo1 + precioVinilo4
                                alert ('Eligio el vinilo The Rise and Fall of Ziggy Stardust and the Spiders from Mars, Amanecer Buho y Parte de la Religion su precio es $USD ' + sumaTotal )
                                                
                                let resultadodescuento31y4 = descuento (sumaTotal, porcentaje)
                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento31y4)
                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir') 
                                //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                    switch (entrada){
                                    case '2': 
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                    
                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                    entrada = prompt ('Presione ESC para salir')                       
                                    break;
                                    default:
                                        while (entrada!='ESC') {
                                            nuevosVinilos()
                                        }
                                    }
                                }  
                            break;
                            default:
                                while(entrada2!='ESC') {
                                    nuevosVinilos()
                                }
                                }
                            }
                            break;
                                
                                    //seleccion dos vinilos
                                case '2':
                                    sumaTotal =  precioVinilo2 + precioVinilo4;
                                    alert ('A elegido los vinilos The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Final Cut')
                                    
                                    let resultadoDescuento3y2 = descuento (sumaTotal, porcentaje)
                                    alert ('debido a un descuento le queda en ' + resultadoDescuento3y2)
                                    entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
    
                                    //seleccion tres vinilos
                                    while (entrada != 'ESC') {
                                        switch (entrada) {
                                            case '1':
                                                sumaTotal = precioVinilo3 + precioVinilo2 + precioVinilo1
                                                alert ('Eligio el vinilo The Rise and Fall of Ziggy Stardust and the Spiders from Mars, Final Cut y Amanacer Buho su precio es $USD ' + sumaTotal)
                                                
                                                let resultadoDescuento32y1 = descuento (sumaTotal,porcentaje)
                                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento32y1)
                                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')     
                                                //seleccion cuatros vinilos
                                                while (entrada != 'ESC') { 
                                                    switch (entrada){
                                                    case '4': 
                                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                    
                                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                                    entrada = prompt ('Presione ESC para salir')                       
                                                    break;
                                                    default:
                                                        while(entrada2!='ESC') {
                                                            nuevosVinilos()
                                                        }
                                                    break;
                                                    }
                                                }  
                                            break;
                                            //seleccion tres vinilos
                                            case '4': 
                                                sumaTotal = precioVinilo3 + precioVinilo2 + precioVinilo4
                                                alert ('Eligio el vinilo The Rise and Fall of Ziggy Stardust and the Spiders from Mars, Final Cut y Parte de la Religion su precio es $USD ' + sumaTotal )
                                                
                                                let resultadodescuento32y4 = descuento (sumaTotal, porcentaje)
                                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento32y4)
                                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')     
                                                //seleccion cuatros vinilos
                                                while (entrada != 'ESC') { 
                                                    switch (entrada){
                                                    case '1': 
                                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                    
                                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                                    entrada = prompt ('Presione ESC para salir')                       
                                                    break;
                                                    default:
                                                        while(entrada2!='ESC'){
                                                            nuevosVinilos()
                                                        }
                                                    }
                                                }  
                                            break;
                                            default:
                                                while (entrada2!='ESC') {
                                                    nuevosVinilos()
                                                }
                                            break
                                        }
                                    }
                                    break;
                                
                                //seleccion dos vinilos
                                case '4':
                                    sumaTotal =  precioVinilo3 + precioVinilo4;
                                    alert ('A elegido los vinilos The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Parte de la Religion')
                                    
                                    let resultadoDescuento3y4 = descuento (sumaTotal, porcentaje)
                                    alert ('debido a un descuento le queda en ' + resultadoDescuento3y4)
                                    entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
                                    
                                    //seleccion tres vinilos
                                    while (entrada != 'ESC') {
                                        switch (entrada) {
                                            case '1':
                                                sumaTotal = precioVinilo3 + precioVinilo4 + precioVinilo1
                                                alert ('Eligio el vinilo The Rise and Fall of Ziggy Stardust and the Spiders from Mars, Parte de la Religion y Amanacer Buho su precio es $USD ' + sumaTotal)
                                                
                                                let resultadoDescuento34y1 = descuento (sumaTotal,porcentaje)
                                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento34y1)
                                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir') 
                                                //seleccion cuatros vinilos
                                                while (entrada != 'ESC') { 
                                                    switch (entrada){
                                                    case '2': 
                                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                    
                                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                                    entrada = prompt ('Presione ESC para salir')                       
                                                    break;
                                                    default:
                                                        while(entrada2!='ESC'){
                                                            nuevosVinilos()
                                                        }
                                                    break;
                                                    }
                                                }  
                                            break;
                                            //seleccion tres vinilos
                                            case '2': 
                                                sumaTotal = precioVinilo3 + precioVinilo4 + precioVinilo2
                                                alert ('Eligio el vinilo The Rise and Fall of Ziggy Stardust and the Spiders from Mars, Parte de la Religion y Final Cut su precio es $USD ' + sumaTotal )
                                                
                                                let resultadodescuento34y2 = descuento (sumaTotal, porcentaje)
                                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento34y2)
                                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')   
                                                //seleccion cuatros vinilos
                                                while (entrada != 'ESC') { 
                                                    switch (entrada){
                                                    case '1': 
                                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                    
                                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                                    entrada = prompt ('Presione ESC para salir')                       
                                                    break;
                                                    default:
                                                        while(entrada2!='ESC'){
                                                            nuevosVinilos()
                                                        }
                                                    break;
                                                    }
                                                } 
                                            break;
                                            default:
                                            while(entrada2!='ESC'){
                                                nuevosVinilos()
                                            }
                                            break;
                                        }
                                    }
                                    break;
                    default:
                        while(entrada2!='ESC') {
                            nuevosVinilos()
                        }
                    break;
                    }
                    }
                    break;

                    //seleccion un vinilo
            case '4':
            alert ('Eligio el vinilo Parte de la Religion, su precio es USD$ ' + precioVinilo4)
            sumaTotal = precioVinilo4
            let resultadoDescuento4 = descuento (sumaTotal, porcentaje)
            alert ('Debido a un descuento del 10% el vinilo quedaría en $USD' + resultadoDescuento4)
            entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
    
                //seleccion dos vinilos
                while (entrada != 'ESC') {
                switch (entrada){
                    case '1':
                    sumaTotal =  precioVinilo4 + precioVinilo1;
                                            
                    let resultadoDescuento4y1 = descuento (sumaTotal, porcentaje)
                    alert ('Eligio Parte de la religion y Amanecer Buho, debido a un descuento le queda en ' + resultadoDescuento4y1)
                    entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
    
                    //seleccion tres vinilos
                    while (entrada != 'ESC') {
                        switch (entrada) {
                            case '2':
                                sumaTotal = precioVinilo4 + precioVinilo1 + precioVinilo2
                                alert ('Eligio el vinilo Parde de la Religion, Amanecer Buho y Final Cut su precio es $USD ' + sumaTotal)
                                                        
                                let resultadoDescuento41y2 = descuento (sumaTotal,porcentaje)
                                alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento41y2)
                                entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir') 
                                //seleccion cuatros vinilos
                                while (entrada != 'ESC') { 
                                switch (entrada){
                                case '3': 
                                sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                entrada = prompt ('Presione ESC para salir')                       
                                break;
                                default:
                                    while(entrada2!='ESC') {
                                        nuevosVinilos()
                                    }
                                }
                                } 
                        break;
                                //seleccion tres vinilos
                                case '3': 
                                    sumaTotal = precioVinilo4 + precioVinilo1 + precioVinilo3
                                    alert ('Eligio el vinilo Parte de la Religion, Amanecer Buho y The Rise and Fall of Ziggy Stardust and the Spiders from Mars su precio es $USD ' + sumaTotal )
                                                        
                                    let resultadodescuento41y3 = descuento (sumaTotal, porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadodescuento41y3)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')  
                                    //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                    switch (entrada){
                                    case '2': 
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                    entrada = prompt ('Presione ESC para salir')                       
                                    break;
                                    default:
                                        while(entrada2!='ESC' ){
                                            nuevosVinilos()
                                        }
                                    }
                                }    
                                break;
                                default: 
                                while(entrada!='ESC') {
                                nuevosVinilos()
                                }
                            }
                        }
                    break;
                                            
                    //Seleccion dos vinilos
                    case '2':
                        sumaTotal =  precioVinilo4 + precioVinilo2;
                        alert ('A elegido los vinilos Parte de la Religion y Final Cut')
                                            
                        let resultadoDescuento4y2 = descuento (sumaTotal, porcentaje)
                        alert ('debido a un descuento le queda en ' + resultadoDescuento4y2)
                        entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
                                            
                        //seleccion tres vinilos
                        while (entrada != 'ESC') {
                            switch (entrada) {
                                case '1':
                                    sumaTotal = precioVinilo4 + precioVinilo2 + precioVinilo1
                                    alert ('Eligio el vinilo Parde de la Religion, Final Cut y Amanecer Buho su precio es $USD ' + sumaTotal)
                                                        
                                    let resultadoDescuento42y1 = descuento (sumaTotal,porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento42y1)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')  
                                    //seleccion cuatros vinilos
                                    while (entrada != 'ESC') { 
                                    switch (entrada){
                                    case '3': 
                                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                    entrada = prompt ('Presione ESC para salir')                       
                                    break;
                                    default:
                                        while(entrada2!='ESC'){
                                            nuevosVinilos()
                                        }
                                    break
                                    }
                                }  
                                break;
                                // Seleccionar tres vinilos
                                    case '3': 
                                        sumaTotal = precioVinilo4 + precioVinilo2 + precioVinilo3
                                        alert ('Eligio el vinilo Parte de la Religion, Final Cut y The Rise and Fall of Ziggy Stardust and the Spiders from Mars su precio es $USD ' + sumaTotal )
                                                        
                                        let resultadoDescuento42y3 = descuento (sumaTotal, porcentaje)
                                        alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento42y3)
                                        entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')   
                                        
                                        //seleccion cuatros vinilos
                                        while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '1': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        default:
                                            while(entrada2!='ESC') {
                                                nuevosVinilos()
                                            }
                                        }
                                    }  
                                    break;
                                default:
                                    while(entrada2!='ESC'){
                                        nuevosVinilos()
                                    }
                                    }
                                }
                                break;
                                        
                //Seleccion dos vinilos
                case '3':
                    sumaTotal =  precioVinilo4 + precioVinilo3;
                    alert ('A elegido los vinilos Parte de la Religion y The Rise and Fall of Ziggy Stardust and the Spiders from Mars')
                                            
                    let resultadoDescuento4y3 = descuento (sumaTotal, porcentaje)
                    alert ('debido a un descuento le queda en ' + resultadoDescuento4y3)
                    entrada = prompt ('Para continuar comprando escriba otro numero o presione ESC para salir')                        
    
                        //seleccion tres vinilos
                        while (entrada != 'ESC') {
                            switch (entrada) {
                                case '1':
                                    sumaTotal = precioVinilo4 + precioVinilo3 + precioVinilo1
                                    alert ('Eligio el vinilo Parde de la Religion, The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Amanecer Buho su precio es $USD ' + sumaTotal)
                                                        
                                    let resultadoDescuento43y1 = descuento (sumaTotal,porcentaje)
                                    alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento43y1)
                                    entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')
                                                        
                                        //seleccion cuatros vinilos
                                        while (entrada != 'ESC') { 
                                        switch (entrada){
                                        case '2': 
                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                        entrada = prompt ('Presione ESC para salir')                       
                                        break;
                                        }
                                    } 
                                    break;
                                                    //seleccion tres vinilos
                                                    case '2': 
                                                        sumaTotal = precioVinilo4 + precioVinilo3 + precioVinilo2
                                                        alert ('Eligio el vinilo Parte de la Religion, The Rise and Fall of Ziggy Stardust and the Spiders from Mars y Final Cut su precio es $USD ' + sumaTotal )
                                                        
                                                        let resultadoDescuento43y2 = descuento (sumaTotal, porcentaje)
                                                        alert ('Con el descuento los tres vinilos te quedan en ' + resultadoDescuento43y2)
                                                        entrada = prompt ('Ya selecciono 3 vinilos, puede elegir llevarse los 4 con un 20% de descuento o presione ESC para salir')   
                                                        
                                                        //seleccion cuatros vinilos
                                                        while (entrada != 'ESC') { 
                                                        switch (entrada){
                                                        case '1': 
                                                        sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                                                        alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                                                        
                                                        let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                                                        alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                                                        entrada = prompt ('Presione ESC para salir')                       
                                                        break;
                                                        default:
                                                            while(entrada2!='ESC'){
                                                                nuevosVinilos()
                                                            }
                                                        }
                                                    }
                                                    break;
                                                }

                                            }
                                            break;
                                            default:
                                            while(entrada2!='ESC'){
                                                nuevosVinilos()
                                            }
                                            break;
                                        }
                        }
                    break;
                    case 'Todos':
                    sumaTotal = precioVinilo1 + precioVinilo2 + precioVinilo3 + precioVinilo4
                    alert ('A seleccionado todos los vinilos disponibles, el precio total es $USD ' + sumaTotal )
                    
                    let resultadoDescuento1234 = descuento (sumaTotal, porcentaje2)
                    alert ('Se lleva un descuento del 20%, quedando en %USD ' + resultadoDescuento1234)
                    entrada = prompt ('Presione ESC para salir')                       
                    break;

                default:
                while (entrada2 != 'ESC')
                {nuevosVinilos()}
                break;
                }
        }
        }
    seleccionVinilos()











