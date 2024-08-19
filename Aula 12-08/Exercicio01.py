class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def insert(self, value):
        new_node = Node(value)
        if not self.head or self.head.value >= value:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            while current.next and current.next.value < value:
                current = current.next
            new_node.next = current.next
            current.next = new_node
    
    def to_list(self):
        result = []
        current = self.head
        while current:
            result.append(current.value)
            current = current.next
        return result
    
    def from_list(self, arr):
        self.head = None
        for value in arr:
            self.insert(value)


def test_linked_list_insertion_sort():
    test_cases = [
        ("Ordenados", [1, 4, 8, 12]),
        ("Ordem Inversa", [7, 4, 5, 8, 9]),
        ("Duplicados", [7, 7, 7, 5, 2, 1]),
        ("Aleatórios", [4, 2, 7, 1, 3])
    ]
    
    for desc, arr in test_cases:
        print(f"Teste: {desc}")
        linked_list = LinkedList()
        linked_list.from_list(arr)
        print(f"Resultado: {linked_list.to_list()}\n")

test_linked_list_insertion_sort()
