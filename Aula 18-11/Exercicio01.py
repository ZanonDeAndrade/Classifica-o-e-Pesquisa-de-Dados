class Node:
    def _init_(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class HashTableChained:
    def _init_(self, size):
        self.size = size
        self.table = {i: None for i in range(size)}

    def _hash(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        new_node = Node(key, value)
        if self.table[index] is None:
            self.table[index] = new_node
        else:
            current = self.table[index]
            while current.next:
                if current.key == key:  
                    current.value = value
                    return
                current = current.next
            current.next = new_node


htable = HashTableChained(10)
htable.insert("chave1", "valor1")
htable.insert("chave2", "valor2")