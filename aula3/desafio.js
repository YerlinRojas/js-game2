//1
function imc(altura, peso){
  let resultado = peso / (altura*altura)
    return resultado
}

console.log(imc(1.75, 87))


//2
function factorial(n){
    //contador inicial
    let resultado = 1

    //iteracion
    for(let i =2; i <= n; i++){
        resultado *= i;
    }
return resultado;
}

console.log(factorial(5));


//3 1usd = R4.80
function dolar(importe){
     let nuevoImporte = importe * 4.80
     
     return nuevoImporte;
}

console.log(dolar(10));


//4
function rectangular(altura, ancho) {
    let area = altura * ancho
    let perimetro = (altura*2) + (ancho*2)
    console.log(`El perimetro es ${perimetro}, el area es ${area}`)
    
}
rectangular(8,12)


//5

function circular(radio) {
    let pi = 3.14
    let area = pi*(radio*radio)

    let perimetro = 2*pi*radio

    console.log(`El area es ${area} y su perimetro es ${perimetro}`)
}

circular(8);


//6
function tablaMulti(numero) {
   
    for (let i = 1; i <= 10; i++) {
    let respuesta = numero *i
    console.log(`Este seria el resultado ${numero}*${i}= ${respuesta}`)
    }}

tablaMulti(8);

