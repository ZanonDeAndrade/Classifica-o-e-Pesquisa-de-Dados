def busca_binaria_iterativa(arr, chave):
    inicio = 0
    fim = len(arr) - 1

    while inicio <= fim:
        meio = (inicio + fim) // 2

      
        if arr[meio] == chave:
            return meio
      
        elif arr[meio] < chave:
            inicio = meio + 1
        
        else:
            fim = meio - 1


    return -1


lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
chave = 5
resultado = busca_binaria_iterativa(lista, chave)
print(f"Elemento encontrado no índice: {resultado}" if resultado != -1 else "Elemento não encontrado.")
