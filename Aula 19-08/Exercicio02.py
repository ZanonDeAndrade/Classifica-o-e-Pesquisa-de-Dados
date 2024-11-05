import datetime


def bolha(lista):
    n = len(lista)
    for j in range(n):
        for i in range(0, n-j-1):
            if lista[i] > lista[i+1]:
                lista[i], lista[i+1] = lista[i+1], lista[i]
    return lista

def main():
    lista1 = [8, 7, 15, 12, 18, 24, 23, 10]
    lista2 = [ 3, 4, 5, 6, 7, 8]
    lista3 = [4, 4, 7, 2, 9, 7]
    lista4 = [9,8,7,6,5,4]
    

    lista = bolha(lista1)
    startTime = datetime.datetime.now()  
    print("Lista Ordenada:", lista1)
    endTime = datetime.datetime.now()  
    time_original = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array ordenado: {time_original} segundos")


    lista = bolha(lista2)
    startTime = datetime.datetime.now()  
    print("Lista Ordenada:", lista2)
    endTime = datetime.datetime.now()  
    time_original = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array já ordenado: {time_original} segundos")


    lista = bolha(lista3)
    startTime = datetime.datetime.now()  
    print("Lista Ordenada:", lista3)
    endTime = datetime.datetime.now()  
    time_original = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array duplicado: {time_original} segundos")


    lista = bolha(lista4)
    startTime = datetime.datetime.now()  
    print("Lista Ordenada:", lista3)
    endTime = datetime.datetime.now()  
    time_original = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array invertido: {time_original} segundos")

main()  