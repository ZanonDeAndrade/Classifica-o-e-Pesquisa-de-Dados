class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

class ABB:
    def __init__(self):
        self.root = None

    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self._insert_recursive(self.root, key)

    def _insert_recursive(self, current_node, key):
        if key < current_node.key:
            if current_node.left is None:
                current_node.left = Node(key)
            else:
                self._insert_recursive(current_node.left, key)
        elif key > current_node.key:
            if current_node.right is None:
                current_node.right = Node(key)
            else:
                self._insert_recursive(current_node.right, key)

    def search(self, key):
        return self._search_recursive(self.root, key)

    def _search_recursive(self, current_node, key):
        if current_node is None:
            return None
        if key == current_node.key:
            return current_node
        elif key < current_node.key:
            return self._search_recursive(current_node.left, key)
        else:
            return self._search_recursive(current_node.right, key)

    def delete(self, key):
        self.root = self._delete_recursive(self.root, key)

    def _delete_recursive(self, current_node, key):
        if current_node is None:
            return current_node
        if key < current_node.key:
            current_node.left = self._delete_recursive(current_node.left, key)
        elif key > current_node.key:
            current_node.right = self._delete_recursive(current_node.right, key)
        else:
            if current_node.left is None and current_node.right is None:
                return None
            elif current_node.left is None:
                return current_node.right
            elif current_node.right is None:
                return current_node.left
            else:
                min_larger_node = self._get_min(current_node.right)
                current_node.key = min_larger_node.key
                current_node.right = self._delete_recursive(current_node.right, min_larger_node.key)
        return current_node

    def _get_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current

    def pre_order(self):
        return self._pre_order_recursive(self.root)

    def _pre_order_recursive(self, node):
        if node is None:
            return []
        return [node.key] + self._pre_order_recursive(node.left) + self._pre_order_recursive(node.right)

    def in_order(self):
        return self._in_order_recursive(self.root)

    def _in_order_recursive(self, node):
        if node is None:
            return []
        return self._in_order_recursive(node.left) + [node.key] + self._in_order_recursive(node.right)

    def post_order(self):
        return self._post_order_recursive(self.root)

    def _post_order_recursive(self, node):
        if node is None:
            return []
        return self._post_order_recursive(node.left) + self._post_order_recursive(node.right) + [node.key]


# Testando a árvore ABB
abb = ABB()
abb.insert(50)
abb.insert(30)
abb.insert(70)
abb.insert(20)
abb.insert(40)
abb.insert(60)
abb.insert(80)

print("Pré-ordem:", abb.pre_order())
print("In-ordem:", abb.in_order())
print("Pós-ordem:", abb.post_order())

nodo = abb.search(40)
print("Elemento encontrado:", nodo.key if nodo else "Elemento não encontrado")

abb.delete(50)
print("In-ordem após deleção de 50:", abb.in_order())
