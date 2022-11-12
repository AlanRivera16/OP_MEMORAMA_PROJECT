
let iconos = []
let selecciones = []
let intentos = 0;
// apuntamos a elementos en HTML
let mostrarIntentos = document.getElementById('intentos');

generarTablero()

function cargarIconos() {
    iconos = [
        '<img src="imgs/bloodhoud.png">',
        '<img src="imgs/gibraltar.png">',
        '<img src="imgs/pathfinder.png">',
        '<img src="imgs/wraith.png">',
        '<img src="imgs/bangalore.png">',
        '<img src="imgs/caustic.png">',
        '<img src="imgs/mirage.png">',
        '<img src="imgs/octane.png">',
        '<img src="imgs/wattson.png">',
        '<img src="imgs/crypto.png">',

        '<img src="imgs/revenant.png">',
        '<img src="imgs/loba.png">',
        '<img src="imgs/rampart.png">',
        '<img src="imgs/horizon.png">',
        '<img src="imgs/fuse.png">',
        '<img src="imgs/valkery.png">',
        '<img src="imgs/seer.png">',
        '<img src="imgs/ash.png">',
        '<img src="imgs/madmagie.png">',
        '<img src="imgs/baterry.png">',

        '<img src="imgs/hack.png">',
        '<img src="imgs/drone-lifeline.png">',
        '<img src="imgs/adrenaline.png">',
        '<img src="imgs/garrapata.png">',
        '<img src="imgs/kitfenix.png">',
        '<img src="imgs/lifeline.png">',
        '<img src="imgs/nessy.png">',
        '<img src="imgs/predator.png">',
        '<img src="imgs/survive-pack.png">',
        '<img src="imgs/daga.png">',

        '<img src="imgs/w.png">',
        '<img src="imgs/suplier.png">',
        '<img src="imgs/forch.png">',
        '<img src="imgs/mila.png">',
        '<img src="imgs/loba-friend.png">',
        '<img src="imgs/pilot.png">',
        '<img src="imgs/prowley.png">',
        '<img src="imgs/transport.png">',
        '<img src="imgs/spector.png">',
        '<img src="imgs/garra-expl.png">',

        '<img src="imgs/cuper.png">',
    ]
}
// Se creo una funcion para crear un Arrar de 8 cartas aleatorias
function IconosAleatorios() {
    cargarIconos()
    let al = 0;
    cartas = []
    usados = []
   let rep = "";
    for (let i = 0; i < 8; i++) {   
        al =  Math.floor(Math.random()*41 );  
        rep = repetido(al);
       
        if  (rep == false){       
              usados.push(al);    
            cartas[i] = iconos[al];   
           
        } else{ i = i-1;}
            // si la carta ya se uso se resta 1 de i para que busque otra carta. 
     }
    console.log(cartas);

}
// Se creo funcion para ver si el numero o carta no es repetido.
function repetido(num) {
   let repe = false;
    for (i=0; i < usados.length; i++) {
       
    if (num == usados[i]) {
    repe = true;
    }
    }
    return repe;
    }

function generarTablero() {
    setTimeout(()=>{
        this.intentos = 0;
        // console.log();
        mostrarIntentos.innerHTML = ` Numero de Intentos: ${intentos}`;
    },2000)
    
    IconosAleatorios()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 16; i++) {
         tarjetas.push(`
        <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
            <div class="tarjeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${cartas[0]}
                </div>
                <div class="cara superior">
                <img src="./imgs/icon-apex.png">
                </div>
            </div>
        </div>        
        `)
        if (i % 2 == 1) {
            cartas.splice(0, 1)
        }
    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            intentos ++;
            trasera1.style.boxShadow  = 'inset 0 0 0 5px #D0312D'
            trasera2.style.boxShadow  = 'inset 0 0 0 5px #D0312D'
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            setTimeout(() => {
                mostrarIntentos.innerHTML = ` Numero de Intentos: ${intentos}`;
                tarjeta1.style.transform = "rotateY(0deg)"
                tarjeta2.style.transform = "rotateY(0deg)"
                trasera1.style.boxShadow  = 'inset 0 0 0 5px lightcyan'
                trasera2.style.boxShadow  = 'inset 0 0 0 5px lightcyan'
            }, 2000);
          
           
           // trasera1.style.boxShadow  = 'inset 0 0 0 5px lightcyan'
            //trasera2.style.boxShadow  = 'inset 0 0 0 5px lightcyan'
        }else{
            trasera1.style.boxShadow  = 'inset 0 0 0 5px #b0fd82'
            trasera2.style.boxShadow  = 'inset 0 0 0 5px #b0fd82'
            setTimeout(() => {
                trasera1.style.background = "#93c851fe"
                trasera2.style.background = "#93c851fe"
                trasera1.style.boxShadow  = 'inset 0 0 0 5px lightcyan'
                trasera2.style.boxShadow  = 'inset 0 0 0 5px lightcyan'
            }, 2000);
            
        }
    }, 1000);
}
