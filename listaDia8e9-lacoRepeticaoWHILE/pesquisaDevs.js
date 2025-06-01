const leia = require('readline-sync');
let idade;
let genero;
let dev;
let pesquisa = true;

console.log("Digite as informações dos seus colaboradores:")

    idade = leia.questionInt('Idade: ')
    genero = leia.questionInt('Identidade de Gênero: ')
        if (genero >=7 && genero <=0) {
            genero = leia.questionInt('*Digite um número de 1 a 6*')
        }
    dev = leia.questionInt('Pessoa Desenvolvedora: ')

while (pesquisa) {
    switch (genero) {
    case 1:
        genero = 'Mulher Cis'
        break;
    case 2:
        genero = 'Homem Cis'
        break;
    case 3:
        genero = 'Não Binário'
        break;
    case 4:
        genero = 'Mulher Trans'
        break;
    case 5:
        genero = 'Homem Trans'
        break;
    case 6:
        genero = 'Outros'
        break;
    // default:
    //     console.log('Digite um número de 1 a 6')
    //     break;
    }    

    switch (dev) {
    case 1:
        dev = 'BackEnd'
        break;
    case 2:
        dev = 'FrontEnd'
        break;    
    case 3:
        dev = 'Mobile'
        break;
    case 4:
        dev = 'FullStack'
        break;
    // default:
    //     console.log('Digite um número de 1 a 4')
    //     break;
    }
    
    pesquisa = leia.keyInYNStrict('\nDeseja continuar pesquisa? ')
}