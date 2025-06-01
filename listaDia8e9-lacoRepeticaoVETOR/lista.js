const leia = require('readline-sync');
let lista = []
let soma = 0
let media

for (let i = 0; i < 10; i++) {
    lista[i] = leia.questionInt('Digite um número: ')
    soma = soma + lista[i]
}
    media = soma / 10

// for (let i = 1; i < 10; i+=2) {
//     console.log(`O número ${lista[i]} está no índice ${i}`)
// }
console.log(`\nElementos nos índices ímpares:`);
for(let i = 0; i < lista.length; i++) {
    if (i % 2 !== 0) {
        process.stdout.write(`${lista[i]} `);
    }
}

console.log(`\nElementos pares:`);
for(let i = 0; i < 10; i++) {
    if (lista[i] % 2 === 0) {
        process.stdout.write(`${lista[i]} `);
    }
}

console.log(`\nSoma de todos os elementos: ${soma}`);
console.log(`A média desses elementos é: ${media.toFixed(2)}\n`);