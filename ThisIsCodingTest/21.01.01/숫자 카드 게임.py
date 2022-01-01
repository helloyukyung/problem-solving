import sys 
input = sys.stdin.readline 

n, m = map(int, input().split())

max = 0 

for i in range(n): 
    array = list(map(int,input().split()))
    array_min = min(array)

    if (array_min > max):
        max = array_min
    
print(max)
