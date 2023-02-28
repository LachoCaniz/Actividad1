var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')
var botonLimpiar = document.getElementById('botonLimpiar')

var botonSuma = document.getElementById('botonSuma')
var botonResta = document.getElementById('botonResta')
var botonMultiplicacion = document.getElementById('botonMultiplicacion')
var botonDivision = document.getElementById('botonDivision')

var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')

botonLimpiar.addEventListener('click', clickLimpiar)
function clickLimpiar(){
    resultado.innerHTML = '0'
    actual.innerHTML = '0'
}


botonSuma.addEventListener('click', clickSuma)
function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual + valorResultado
    actual.innerHTML = '0'

}

botonResta.addEventListener('click', clickResta)
function clickResta(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual - valorResultado
    actual.innerHTML = '0'
}

botonDivision.addEventListener('click', clickDivision)
function clickDivision(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual / valorResultado
    actual.innerHTML = '0'
}

botonMultiplicacion.addEventListener('click', clickMultiplicacion)
function clickMultiplicacion(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorActual * valorResultado
    actual.innerHTML = '0'
}






botonUno.addEventListener('click', clickUno)

function clickUno(){
    actual.innerHTML+='1'
}

botonDos.addEventListener('click', clickDos)

function clickDos(){
    actual.innerHTML+='2'
}

botonTres.addEventListener('click', clickTres)

function clickTres(){
    actual.innerHTML+='3'
}

botonCuatro.addEventListener('click', clickCuatro)

function clickCuatro(){
    actual.innerHTML+='4'
}

botonCinco.addEventListener('click', clickCinco)

function clickCinco(){
    actual.innerHTML+='5'
}

botonSeis.addEventListener('click', clickSeis)

function clickSeis(){
    actual.innerHTML+='6'
}

botonSiete.addEventListener('click', clickSiete)

function clickSiete(){
    actual.innerHTML+='7'
}

botonOcho.addEventListener('click', clickOcho)

function clickOcho(){
    actual.innerHTML+='8'
}

botonNueve.addEventListener('click', clickNueve)

function clickNueve(){
    actual.innerHTML+='9'
}

botonCero.addEventListener('click', clickCero)

function clickCero(){
    actual.innerHTML+='0'
}
