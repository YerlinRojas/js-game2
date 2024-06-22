//1
saludo();

function saludo() {
    console.log("¡Hola, mundo!" )
}


//2
saludos("Joaquin")

function saludos(nombre) {
    console.log(`Hola, ${nombre}`)
    
}

//3

function numeroDoble(number) {
    let numero = number + 1
    return
    }

console.log (numeroDoble(2));


//4
function promedio(valor1, valor2, valor3) {
    
    let suma = valor1 + valor2 +valor3
    let resultado = suma /3

    return resultado
}
console.log(promedio (3,5,8))


//5
function mayorque(valor1, valor2) {
    if(valor1<valor2){
        return valor2
    }else{
        return valor1
    }
    
};
console.log(mayorque (3,8));


//6
function multi(valor1) {
    
    let multiplicar = valor1*valor1
    return multiplicar
};

console.log(multi(5));

