def bolha(lista):
    n = len(lista)
    for j in range(n):
        for i in range(0, n-j-1):
            if lista[i] > lista[i+1]:
                lista[i], lista[i+1] = lista[i+1], lista[i]
    return lista

def main():
    lista = [8, 7, 15, 12, 18, 24, 23, 10]
    print("Lista Original:", lista)
    lista = bolha(lista)
    print("Lista Ordenada:", lista)

main()
