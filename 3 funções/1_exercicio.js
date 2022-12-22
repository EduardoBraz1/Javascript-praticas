function imprimirNome(name) {
    return name;
}

console.log(imprimirNome('Eduardo'));
console.log(imprimirNome('Rodolfo'));

const meunome = 'Eduardo'

function verificarIdade(idade) {
    if (idade < 18) {
        return imprimirNome(meunome) + ' é Menor de idade';
    } else {
        return imprimirNome(meunome) + ' é Maior de idade';
    }
}

console.log(verificarIdade(20));