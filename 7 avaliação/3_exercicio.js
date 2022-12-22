/* 3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira: 
   
   valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a	R$ 2500.00 = 10.00%
    Maior que 2500.00 = 15.00%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00
*/

const { gets, print } = require('./funcoes auxiliares_ex3');

const salarioBruto = gets();
const valorBeneficio = gets();

function calcularPorcentagem(valor, porcentagem) {
    return valor * (porcentagem / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario > 1100 && salario <= 2500) {
        return 10;
    } else if (salario > 2500) {
        return 15;
    } else {
        return 0;
    }
}

const aliquotaImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto,aliquotaImposto);

const salarioLiquido = salarioBruto - valorImposto + valorBeneficio;

print(salarioLiquido.toFixed(2));