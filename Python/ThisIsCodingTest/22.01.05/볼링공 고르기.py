import sys
input = sys.stdin.readline


n, m = map(int, input().split())
data = list(map(int, input().split())) 
result = 0

for i in range(n):
    for j in range(i, n):
        if data[i] != data[j]:
            result += 1


print(result)
        