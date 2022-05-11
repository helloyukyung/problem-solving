import sys 
input = sys.stdin.readline


arr = list(map(int, input().split()))
n =len(arr)
arr.insert(0,0)

dy = [0]*(n+1)
dy[1] = 1
res = 0

for i in range(2,n+1):
    num_max = 0 
    for j in range(i-1,0,-1):
        if arr[j] < arr[i] and dy[j] > num_max:
            num_max = dy[j]
        dy[i] = num_max+1
        if dy[i] > res:
            res = dy[i]

print(res)

