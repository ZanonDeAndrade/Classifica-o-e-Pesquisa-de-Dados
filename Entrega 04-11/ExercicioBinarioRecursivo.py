def busca_binaria_recursiva(arr, chave, inicio, fim):
   
    if inicio > fim:
        return -1  

    meio = (inicio + fim) // 2


    if arr[meio] == chave:
        return meio
    elif arr[meio] < chave:
        return busca_binaria_recursiva(arr, chave, meio + 1, fim)
    else:
        return busca_binaria_recursiva(arr, chave, inicio, meio - 1)


lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
chave = 5
resultado = busca_binaria_recursiva(lista, chave, 0, len(lista) - 1)
print(f"Elemento encontrado no índice: {resultado}" if resultado != -1 else "Elemento não encontrado.")
