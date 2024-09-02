import datetime


def merge(v, ini, meio, fim):
    temp = []
    p1 = ini
    p2 = meio + 1
    

    while p1 <= meio and p2 <= fim:
        if v[p1] <= v[p2]:
            temp.append(v[p1])
            p1 += 1
        else:
            temp.append(v[p2])
            p2 += 1
    

    while p1 <= meio:
        temp.append(v[p1])
        p1 += 1
    

    while p2 <= fim:
        temp.append(v[p2])
        p2 += 1
    

    for i in range(len(temp)):
        v[ini + i] = temp[i]

def merge_sort(v, ini, fim):
    if ini < fim:
        meio = (ini + fim) // 2
        merge_sort(v, ini, meio)
        merge_sort(v, meio + 1, fim)
        merge(v, ini, meio, fim)


def main():
    v = [8, 7, 15, 12, 18, 24, 23, 10]
    v2 = [ 3, 4, 5, 6, 7, 8]
    v3 = [4, 4, 7, 2, 9, 7]
    v4 = [9,8,7,6,5,4]
    

    merge_sort(v, 0, len(v) - 1)
    startTime = datetime.datetime.now()  
    print("Array ordenado:", v)
    endTime = datetime.datetime.now() 
    time_sorted = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array ordenado: {time_sorted} segundos")


    merge_sort(v2, 0, len(v2) - 1)
    startTime = datetime.datetime.now()  
    print("Array ordenado:", v2)
    endTime = datetime.datetime.now() 
    time_sorted = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array já ordenado: {time_sorted} segundos")

    merge_sort(v3, 0, len(v3) - 1)
    startTime = datetime.datetime.now()  
    print("Array ordenado:", v3)
    endTime = datetime.datetime.now() 
    time_sorted = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array duplicado: {time_sorted} segundos")


    merge_sort(v4, 0, len(v4) - 1)
    startTime = datetime.datetime.now()  
    print("Array ordenado:", v4)
    endTime = datetime.datetime.now() 
    time_sorted = (endTime - startTime).total_seconds()
    print(f"Tempo para imprimir o array invertido: {time_sorted} segundos")

if __name__ == "__main__":
    main()
