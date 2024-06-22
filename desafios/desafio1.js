
let saludo = document.querySelector('h1');

saludo.innerHTML= 'Hora del Desafio';

function botonClicleado(){
    console.log('El boton fue clicado')
}

function botonPrompt(){
    let ciudad = prompt('nombre de ciudad de Brasil?')

    console.log(ciudad)
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}


function yoAmo(){
    alert('Yo amo JS')
}


function suma(){
    let valor1 = parseInt(prompt('Indica valor1'))
    let valor2 = parseInt(prompt('Indica valor2'))

    let suma = valor1 + valor2

    alert (`Este es el valor de tu suma : ${suma}`)

    console.log(suma)
}