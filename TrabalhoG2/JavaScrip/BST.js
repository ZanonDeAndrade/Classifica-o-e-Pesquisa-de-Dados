class Node {
    constructor(jogo) {
        this.jogo = jogo;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Adiciona um jogo na árvore
    adicionar(jogo) {
        const newNode = new Node(jogo);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this._inserirNo(this.root, newNode);
    }

    // Insere um nó na árvore
    _inserirNo(node, newNode) {
        if (newNode.jogo.preco < node.jogo.preco) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._inserirNo(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._inserirNo(node.right, newNode);
            }
        }
    }

    // Busca jogos por preço específico
    buscarPorPreco(preco) {
        return this._buscarPorPreco(this.root, preco);
    }

    _buscarPorPreco(node, preco) {
        if (!node) return null;
        if (node.jogo.preco === preco) {
            return node.jogo;
        } else if (preco < node.jogo.preco) {
            return this._buscarPorPreco(node.left, preco);
        } else {
            return this._buscarPorPreco(node.right, preco);
        }
    }

    // Busca jogos dentro de um intervalo de preços
    buscarPorFaixaPreco(min, max) {
        const resultados = [];
        this._buscarPorFaixaPreco(this.root, min, max, resultados);
        return resultados;
    }

    _buscarPorFaixaPreco(node, min, max, resultados) {
        if (!node) return;
        if (node.jogo.preco >= min && node.jogo.preco <= max) {
            resultados.push(node.jogo);
        }
        if (min < node.jogo.preco) {
            this._buscarPorFaixaPreco(node.left, min, max, resultados);
        }
        if (max > node.jogo.preco) {
            this._buscarPorFaixaPreco(node.right, min, max, resultados);
        }
    }
}

module.exports = BST;
