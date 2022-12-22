/* 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50 */

const numerosPares = [];

for (let i = 10; i <= 50; i++) {
    if(i % 2 === 0){
        numerosPares.push(i);
        

    } 
}

console.log(numerosPares);

/* Imprimindo a lista dentro do Array */
for (let i = 0; i < numerosPares.length; i++) {
    const numero = numerosPares[i];
    
    console.log(numero);
}