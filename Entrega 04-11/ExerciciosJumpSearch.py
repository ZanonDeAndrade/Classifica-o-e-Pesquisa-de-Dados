import math

def jump_search(arr, target):
    n = len(arr)
    step = int(math.sqrt(n)) 
    prev = 0

    while prev < n and arr[min(step, n) - 1] < target:
        prev = step
        step += int(math.sqrt(n))
        if prev >= n:
            return -1  

   
    for i in range(prev, min(step, n)):
        if arr[i] == target:
            return i  

    return -1 


arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21]
target = 11
result = jump_search(arr, target)

if result != -1:
    print(f"Elemento encontrado no índice {result}")
else:
    print("Elemento não encontrado")
