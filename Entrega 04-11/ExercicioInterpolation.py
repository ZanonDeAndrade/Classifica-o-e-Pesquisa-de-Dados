def busca_interpolacao(array, valor):
    if len(array) == 0:
        return -1
    
    inicio = 0
    fim = len(array) - 1

    while inicio <= fim and valor >= array[inicio] and valor <= array[fim]:
        posicao = inicio + int((float(fim - inicio) / (array[fim] - array[inicio])) * (valor - array[inicio]))
        if array[posicao] == valor:
            return posicao
        elif array[posicao] < valor:
            inicio = posicao +1
        else:
            fim = posicao - 1
            
    return -1

array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
valor_procurado = int(input("Digite o número que deseja buscar no array:"))
resultado = busca_interpolacao(array, valor_procurado)

if resultado != -1:
    print(f'Valor {valor_procurado} encontrado na posição: {resultado}')
else:
    print(f'Valor {valor_procurado} não encontrado no array.')