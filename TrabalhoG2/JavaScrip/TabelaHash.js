class TabelaHash {
    constructor() {
        this.tabela = {};
    }

    // Adiciona um jogo à tabela hash para cada gênero
    adicionar(jogo) {
        // Verifica se os generos dos jogos é um array
        if (!Array.isArray(jogo.generos)) {
            console.error('Generos devem ser um array');
            return;
        }

    
        jogo.generos.forEach(genero => {
            // Normaliza para minúsculas para garantir que a busca seja insensível a maiúsculas/minúsculas
            genero = genero.toLowerCase();

            if (!this.tabela[genero]) {
                this.tabela[genero] = [];
            }
            // Armazena o jogo completo em vez de só o id
            this.tabela[genero].push(jogo);
        });
    }

    // Busca por gênero
    buscarPorGenero(genero) {
        // Normaliza a busca para minúsculas
        genero = genero.toLowerCase();
        return this.tabela[genero] || [];
    }
}

module.exports = TabelaHash;
