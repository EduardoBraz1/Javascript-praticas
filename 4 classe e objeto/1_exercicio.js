/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    kmPorLitro;

    constructor(marca, cor, kmPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.kmPorLitro * precoCombustivel;
    }
}

const fit = new Carro('Honda', 'Cinza', 1 / 16)
console.log(fit.calcularGastoDePercurso(202, 4.89).toFixed(2));