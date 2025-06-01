const leia = require('readline-sync');
let idade;
let menor = 0
let maior = 0
let continuar = true

console.log('\n***Digite um número negativo para encerrar a operação ***\n')

while (continuar) {
    idade = leia.questionInt('Digite uma idade: ')                
    if (idade < 0) {
    break
    }
        if (idade < 21){
            menor++
        } else if (idade > 50) {
            maior++
        }      
}
console.log(`\nTotal de pessoas menores de 21 anos: ${menor}`)
console.log(`\nTotal de pessoas maiores de 50 anos: ${maior}\n`)