class Node {
    constructor(jogo) {
        this.jogo = jogo; // Atribui o objeto 'jogo' ao nó
        this.left = null; // Ponteiro para o filho esquerdo (preços menores)
        this.right = null; // Ponteiro para o filho direito (preços maiores)
    }
}

// Definição da Árvore de Busca Binária (BST)
class BST {
    constructor() {
        this.root = null; // A raiz da árvore é inicialmente nula
    }

    // Método para adicionar um novo jogo à árvore
    adicionar(jogo) {
        const newNode = new Node(jogo); // Cria um novo nó para o jogo a ser adicionado
        if (!this.root) {
            this.root = newNode; // Se a árvore estiver vazia, o novo nó se torna a raiz
            return;
        }
        // Caso contrário, a inserção é feita recursivamente
        this._inserirNo(this.root, newNode);
    }

    // Método recursivo para inserir um novo nó na árvore
    _inserirNo(node, newNode) {
        if (newNode.jogo.preco < node.jogo.preco) {
            if (!node.left) {
                node.left = newNode; // Coloca à esquerda se o preço for menor
            } else {
                this._inserirNo(node.left, newNode); // Recursão para o lado esquerdo
            }
        } else {
            if (!node.right) {
                node.right = newNode; // Coloca à direita se o preço for maior ou igual
            } else {
                this._inserirNo(node.right, newNode); // Recursão para o lado direito
            }
        }
    }

    // Método para buscar todos os jogos com o preço exato
    buscarPorPreco(preco) {
        const resultados = [];
        this._buscarPorPreco(this.root, preco, resultados); // Passa os resultados para acumular
        return resultados;
    }

    // Método recursivo para buscar todos os jogos com o preço exato
    _buscarPorPreco(node, preco, resultados) {
        if (!node) return; // Se o nó for nulo, termina a busca

        if (node.jogo.preco === preco) {
            resultados.push(node.jogo); // Adiciona o jogo ao array de resultados
        }

        // Continua a busca na subárvore esquerda ou direita, dependendo do preço
        if (preco <= node.jogo.preco) {
            this._buscarPorPreco(node.left, preco, resultados); // Busca à esquerda
        }
        if (preco >= node.jogo.preco) {
            this._buscarPorPreco(node.right, preco, resultados); // Busca à direita
        }
    }

    // Método para buscar jogos dentro de uma faixa de preços
    buscarPorFaixaPreco(min, max) {
        const resultados = [];
        this._buscarPorFaixaPreco(this.root, min, max, resultados); // Chama a função recursiva
        return resultados;
    }

    // Método recursivo para buscar jogos dentro de uma faixa de preços
    _buscarPorFaixaPreco(node, min, max, resultados) {
        if (!node) return; // Se o nó for nulo, termina a busca

        // Verifica se o preço do jogo está dentro da faixa
        if (node.jogo.preco >= min && node.jogo.preco <= max) {
            resultados.push(node.jogo); // Adiciona o jogo aos resultados
        }

        // Continua a busca na subárvore esquerda se o preço mínimo da faixa for menor que o preço do nó
        if (min < node.jogo.preco) {
            this._buscarPorFaixaPreco(node.left, min, max, resultados); // Busca à esquerda
        }

        // Continua a busca na subárvore direita se o preço máximo da faixa for maior que o preço do nó
        if (max > node.jogo.preco) {
            this._buscarPorFaixaPreco(node.right, min, max, resultados); // Busca à direita
        }
    }
}

module.exports = BST;
