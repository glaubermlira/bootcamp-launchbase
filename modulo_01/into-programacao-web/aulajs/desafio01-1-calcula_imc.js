// Desafio 1-1: Primeiros passos com JS
// Cálculo de IMC
// Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;

const nome = 'Rafaela'
const peso = 88
const altura = 1.65

const imc = peso / (altura**2)

let message = ""

if (imc >= 30) {
  message = `IMC = ${imc.toFixed(1)} ${nome}, você está acima do peso`
} else {
  message = `IMC = ${imc.toFixed(1)} ${nome}, você não está acima do peso`
}

console.log(message);