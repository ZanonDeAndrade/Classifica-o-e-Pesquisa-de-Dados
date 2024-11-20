const BST = require('./BST');  // Adicionando a importação do módulo BST
const TabelaHash = require('./TabelaHash');
const Jogo = require('./Jogo');

class MotorBuscaJogos {
    constructor() {
        this.bst = new BST();
        this.hash = new TabelaHash();
    }

    adicionarJogo(jogo) {
        this.bst.adicionar(jogo);
        this.hash.adicionar(jogo);
    }

    buscarPorPreco(preco) {
        return this.bst.buscarPorPreco(preco);
    }

    buscarPorFaixaPreco(minPreco, maxPreco) {
        return this.bst.buscarPorFaixaPreco(minPreco, maxPreco);
    }

    buscarPorGenero(genero) {
        return this.hash.buscarPorGenero(genero);
    }
}

module.exports = MotorBuscaJogos;
