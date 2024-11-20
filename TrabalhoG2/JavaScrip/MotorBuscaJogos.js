const BST = require('./BST');  
const TabelaHash = require('./TabelaHash');  
const Jogo = require('./Jogo');  


class MotorBuscaJogos {
    constructor() {
        this.bst = new BST();  // Inicializa a árvore binária de busca
        this.hash = new TabelaHash();  // Inicializa a tabela hash
    }

    // Método para adicionar um jogo tanto na árvore binária (BST) quanto na tabela hash
    adicionarJogo(jogo) {
        this.bst.adicionar(jogo);  // Adiciona o jogo na árvore BST para organização por preço
        this.hash.adicionar(jogo);  // Adiciona o jogo na tabela hash para organização por gênero
    }

    // Método para buscar um jogo com preço específico na árvore binária
    buscarPorPreco(preco) {
        return this.bst.buscarPorPreco(preco);  // Utiliza o método de busca da BST para encontrar o jogo pelo preço
    }

    // Método para buscar jogos dentro de uma faixa de preço na árvore binária
    buscarPorFaixaPreco(minPreco, maxPreco) {
        return this.bst.buscarPorFaixaPreco(minPreco, maxPreco);  // Utiliza o método de faixa de preço da BST
    }

    // Método para buscar jogos por gênero na tabela hash
    buscarPorGenero(genero) {
        return this.hash.buscarPorGenero(genero);  // Utiliza o método de busca da tabela hash para encontrar jogos por gênero
    }
}

// Exporta a classe MotorBuscaJogos para ser utilizada em outros arquivos
module.exports = MotorBuscaJogos;
