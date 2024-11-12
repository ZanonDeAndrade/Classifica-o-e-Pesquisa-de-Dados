class Produto:
    def __init__(self, id, nome, descricao, preco):
        self.id = id
        self.nome = nome
        self.descricao = descricao
        self.preco = preco

class Node:
    def __init__(self, produto):
        self.produto = produto
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def inserir(self, produto):
        if self.root is None:
            self.root = Node(produto)
        else:
            self._inserir_recursivo(self.root, produto)

    def _inserir_recursivo(self, current_node, produto):
        if produto.id < current_node.produto.id:
            if current_node.left is None:
                current_node.left = Node(produto)
            else:
                self._inserir_recursivo(current_node.left, produto)
        elif produto.id > current_node.produto.id:
            if current_node.right is None:
                current_node.right = Node(produto)
            else:
                self._inserir_recursivo(current_node.right, produto)

    def buscar(self, id):
        return self._buscar_recursivo(self.root, id)

    def _buscar_recursivo(self, current_node, id):
        if current_node is None:
            return None
        if id == current_node.produto.id:
            return current_node.produto
        elif id < current_node.produto.id:
            return self._buscar_recursivo(current_node.left, id)
        else:
            return self._buscar_recursivo(current_node.right, id)

    def remover(self, id):
        self.root = self._remover_recursivo(self.root, id)

    def _remover_recursivo(self, current_node, id):
        if current_node is None:
            return None
        if id < current_node.produto.id:
            current_node.left = self._remover_recursivo(current_node.left, id)
        elif id > current_node.produto.id:
            current_node.right = self._remover_recursivo(current_node.right, id)
        else:
           
            if current_node.left is None and current_node.right is None:
                return None
        
            elif current_node.left is None:
                return current_node.right
            elif current_node.right is None:
                return current_node.left
           
            else:
                min_node = self._get_min(current_node.right)
                current_node.produto = min_node.produto
                current_node.right = self._remover_recursivo(current_node.right, min_node.produto.id)
        return current_node

    def _get_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current

    def listar_em_ordem(self):
        produtos = []
        self._in_order_recursive(self.root, produtos)
        return produtos

    def _in_order_recursive(self, node, produtos):
        if node is not None:
            self._in_order_recursive(node.left, produtos)
            produtos.append(node.produto)
            self._in_order_recursive(node.right, produtos)


bst = BST()
bst.inserir(Produto(30, "Produto A", "Descrição do Produto A", 100.0))
bst.inserir(Produto(20, "Produto B", "Descrição do Produto B", 150.0))
bst.inserir(Produto(40, "Produto C", "Descrição do Produto C", 200.0))


produto_buscado = bst.buscar(20)
print(f"Produto encontrado: {produto_buscado.nome}" if produto_buscado else "Produto não encontrado")


produtos_ordenados = bst.listar_em_ordem()
print("Produtos em ordem crescente de ID:")
for produto in produtos_ordenados:
    print(f"ID: {produto.id}, Nome: {produto.nome}, Preço: R$ {produto.preco:.2f}")

bst.remover(30)
produtos_ordenados = bst.listar_em_ordem()
print("Produtos após remoção do produto com ID 30:")
for produto in produtos_ordenados:
    print(f"ID: {produto.id}, Nome: {produto.nome}, Preço: R$ {produto.preco:.2f}")
