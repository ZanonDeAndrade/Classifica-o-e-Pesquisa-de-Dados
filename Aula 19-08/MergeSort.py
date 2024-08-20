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
    v = [38, 27, 43, 3, 9, 82, 10]
    print("Array original:", v)

    merge_sort(v, 0, len(v) - 1)

    print("Array ordenado:", v)

if __name__ == "__main__":
    main()
