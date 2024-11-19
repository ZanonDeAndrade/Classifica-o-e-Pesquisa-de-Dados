class Arquivo:
    def _init_(self, nome, caminho, tamanho):
        self.nome = nome
        self.caminho = caminho
        self.tamanho = tamanho

    def _repr_(self):
        return f"Arquivo(Nome: {self.nome}, Caminho: {self.caminho}, Tamanho: {self.tamanho} KB)"

class TabelaHash:
    def _init_(self, tamanho=10):
        self.tamanho = tamanho
        self.tabela = [[] for _ in range(tamanho)]  
    def _hash(self, chave):
        return sum(ord(char) for char in chave) % self.tamanho

    def adicionar(self, arquivo):
        indice = self._hash(arquivo.nome)
        for item in self.tabela[indice]:
            if item.nome == arquivo.nome:
                print(f"Erro: Um arquivo com o nome '{arquivo.nome}' já existe.")
                return
        self.tabela[indice].append(arquivo)
        print(f"Arquivo '{arquivo.nome}' adicionado com sucesso.")

    def buscar(self, nome):
        indice = self._hash(nome)
        for arquivo in self.tabela[indice]:
            if arquivo.nome == nome:
                return arquivo
        return None

    def remover(self, nome):
        indice = self._hash(nome)
        for i, arquivo in enumerate(self.tabela[indice]):
            if arquivo.nome == nome:
                self.tabela[indice].pop(i)
                print(f"Arquivo '{nome}' removido com sucesso.")
                return
        print(f"Erro: Arquivo '{nome}' não encontrado.")

    def listar_todos(self):
        arquivos = []
        for lista in self.tabela:
            arquivos.extend(lista)
        return arquivos

tabela = TabelaHash(tamanho=10)

tabela.adicionar(Arquivo("relatorio.pdf", "/documentos/relatorio.pdf", 1024))
tabela.adicionar(Arquivo("foto.jpg", "/imagens/foto.jpg", 2048))
tabela.adicionar(Arquivo("dados.csv", "/planilhas/dados.csv", 512))
tabela.adicionar(Arquivo("backup.zip", "/backup/backup.zip", 4096))

print("Busca por 'dados.csv':", tabela.buscar("dados.csv"))

tabela.remover("foto.jpg")

print("Arquivos armazenados:")
for arquivo in tabela.listar_todos():
    print(arquivo)