class Jogo {
  constructor(id, titulo, desenvolvedor, preco, generos) {
    this.id = id;
    this.titulo = titulo;
    this.desenvolvedor = desenvolvedor;
    this.preco = preco;
    this.generos = generos;  // Lista de gêneros
  }
}

module.exports = Jogo;
