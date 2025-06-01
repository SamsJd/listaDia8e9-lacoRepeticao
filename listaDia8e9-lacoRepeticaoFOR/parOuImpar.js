const leia = require('readline-sync');
let numero;
let somaPar = 0
let somaImpar = 0

for (let i = 0; i < 10; i++) {
    numero = leia.questionInt(`Digite o ${i + 1}º número: `)
        if (numero % 2 === 0) {
            somaPar = somaPar + 1
        } else {
            somaImpar = somaImpar + 1
            }
}

console.log(`\nTotal de números pares: ${somaPar}`)
console.log(`Total de números ímpares: ${somaImpar}\n`)