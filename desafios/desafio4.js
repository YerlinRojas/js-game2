//1
//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = []

//2
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["javaScript", "c", "c++", "kotlin","python"]

//3
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push("java")
lenguajesDeProgramacion.push("ruby")
lenguajesDeProgramacion.push("goland")

//4
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function lenguajes() {
    
    console.log(`Esta es la lista ${lenguajesDeProgramacion}`)

}

lenguajes()

//5
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function inverso() {
    let listaInversa = lenguajesDeProgramacion.slice().reverse()
    console.log(`Lista en orden inverso: ${listaInversa}`)

}

inverso()


//6
//Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(listaNumeros) {
    let suma = 0
    for(let numero of listaNumeros)
        {
            suma += numero
        }
        let promedio = suma / listaNumeros.length
        return promedio;
}

let numeros = [10,20,40];
let promedio= calcularPromedio(numeros)
console.log(`Este es el promedio: ${promedio}`)

//7
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroMenorMayor(listaN) {
//forma de ordenar numeros de la lista menor a mayor
    listaN.sort((a,b)=> a-b);

    let menor = listaN[0]
    let mayor = listaN[listaN.length-1]

    console.log(`Numero menor: ${menor}`)
    console.log(`Numero mayor: ${mayor}`)

}

let nros = [1,8,4,7]
numeroMenorMayor(nros);


//8
//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElemtos(lista){
    let sumar=0
    for (let elemento of lista){
        sumar+= elemento;
    }
    return sumar;
}

let sumaTotal= sumarElemtos(nros)
console.log(`La suma de los elementos es: ${sumaTotal}`)



//9
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarElemento(lista, elemento) {
    // utilizamos indexOf() busca al elemto y lo regresa 
    let posicion = lista.indexOf(elemento)
    if (posicion !== -1){
        console.log(`El elemento ${elemento} se encuentra en la posición: ${posicion}`)

    }else{
        console.log(`El elemento ${elemento} no se encontro en la lista`)
    }
    
}


let elementoBuscar = 5
buscarElemento(nros, elementoBuscar);


//10
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

function sumarListas(lista1, lista2) {

    if (lista1.length !== lista2.length){
        console.log('ERROR listas tienen igual tamaño')
        return null
    }else{
        let listaSuma = []
        for (i=0; i< lista1.length; i++){
            listaSuma.push(lista1[i]+lista2[i])
        }
        return listaSuma;
    }
    
}

let listaA=[1,5,2]
let listaB = [8,23,9]
let resultado = sumarListas(listaA, listaB)

console.log(resultado)

//11
//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista){
    let listaCuadrado = [];

    for (let numero of lista){
        listaCuadrado.push(numero*numero)
    }
    return listaCuadrado
}

let cuadrados= cuadradoLista(nros)
console.log(cuadrados)
