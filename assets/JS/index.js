// cajón Personajes

function personajeEnCuadro(name, height, mass, colorDot) {
    let cuadro = `<div class=" shadow bg-white p-4 rounded-2 d-flex gap-3">
        <div>
          <div class="dot${colorDot}"></div>
        </div>
        <div>
          <p class="fw-semibold my-1">${name}</p>
          <p class="m-0 p-0 lh-sm">
            Estatura: ${height} cm. Peso: ${mass} kg.
          </p>
        </div>
      </div>`

return cuadro
}

// cajón rojo

function personajesUnoAlCinco(i) {
    $.get(`https://swapi.dev/api/people/${i}`, function(data, status) {
    let cuadro = personajeEnCuadro(JSON.stringify(data.name), JSON.stringify(data.height), JSON.stringify(data.mass), 'Pink')
    $("#personajesUnoAlCinco").append(cuadro)
    })
}

$(function () {
    $("#seccionCardsUno").on("mouseenter", function() {
        genPersUnoAlCinco.next()
    })
})

function* generadorPersonajesUnoAlCinco() {
let i = 1
yield personajesUnoAlCinco(i);
i++
yield personajesUnoAlCinco(i);
i++
yield personajesUnoAlCinco(i);
i++
yield personajesUnoAlCinco(i);
i++
yield personajesUnoAlCinco(i);
i++
return console.log("Se han generado todos los personajes disponibles.");
}

let genPersUnoAlCinco = generadorPersonajesUnoAlCinco()

// Cajón verde


function personajesSeisAlOnce(i) {
    $.get(`https://swapi.dev/api/people/${i}`, function(data, status) {
    let cuadro = personajeEnCuadro(JSON.stringify(data.name), JSON.stringify(data.height), JSON.stringify(data.mass), 'Green')
    $("#personajesSeisAlOnce").append(cuadro)
    })
}

$(function () {
    $("#seccionCardsDos").on("mouseenter", function() {
        genPersSeisAlOnce.next()
    })
})

function* generadorPersonajesSeisAlOnce() {
let i = 6
yield personajesSeisAlOnce(i);
i++
yield personajesSeisAlOnce(i);
i++
yield personajesSeisAlOnce(i);
i++
yield personajesSeisAlOnce(i);
i++
yield personajesSeisAlOnce(i);
i++
return console.log("Se han generado todos los personajes secundarios disponibles.");
}

let genPersSeisAlOnce = generadorPersonajesSeisAlOnce()

// Cajón Azul

function personajesDoceAlDiecisiete(i) {
    $.get(`https://swapi.dev/api/people/${i}`, function(data, status) {
    let cuadro = personajeEnCuadro(JSON.stringify(data.name), JSON.stringify(data.height), JSON.stringify(data.mass), 'Blue')
    $("#personajesDoceAlDiecisiete").append(cuadro)
    })
}

$(function () {
    $("#seccionCardsTres").on("mouseenter", function() {
        genPersDoceAlDiecisiete.next()
    })
})

function* generadorPersonajesDoceAlDiecisiete() {
let i = 12
yield personajesDoceAlDiecisiete(i);
i++
yield personajesDoceAlDiecisiete(i);
i++
yield personajesDoceAlDiecisiete(i);
i++
yield personajesDoceAlDiecisiete(i);
i++
yield personajesDoceAlDiecisiete(i);
i++
return console.log("Se han generado todos los personajes menos importantes disponibles.");
}

let genPersDoceAlDiecisiete = generadorPersonajesDoceAlDiecisiete()