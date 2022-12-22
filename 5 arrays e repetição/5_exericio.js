/* 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

const notas = [2, 7, 3, 8, 10, 4];

console.log('notas em recuperação:');

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    if(nota < 5){
        console.log(nota);
    }
}