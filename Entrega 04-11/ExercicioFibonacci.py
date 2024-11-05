def fib(n):
  
    fibs = [0, 1]
    while len(fibs) < n:
        fibs.append(fibs[-1] + fibs[-2])
    return fibs

def busca_fibonacci(arr, chave):

    n = len(arr)
    
    fibs = fib(n)

    fib_m2 = fibs[0]  
    fib_m1 = fibs[1]  
    fib_m = fib_m1 + fib_m2  
    offset = -1  

    while fib_m > 1:
       
        i = min(offset + fib_m2, n - 1)

        
        if arr[i] == chave:
            return i
        
        elif arr[i] < chave:
            fib_m = fib_m1
            fib_m1 = fib_m2
            fib_m2 = fibs[fib_m - 2]
            offset = i
        
        else:
            fib_m = fib_m2
            fib_m1 -= fib_m2
            fib_m2 = fibs[fib_m - 3]


    if fib_m1 and arr[offset + 1] == chave:
        return offset + 1

    return -1


lista = [10, 22, 35, 40, 45, 50, 80, 82, 85, 90, 100]
chave = 85
resultado = busca_fibonacci(lista, chave)
print(f"Elemento encontrado no índice: {resultado}" if resultado != -1 else "Elemento não encontrado.")
