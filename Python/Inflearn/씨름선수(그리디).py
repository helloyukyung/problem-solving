import sys
input = sys.stdin.readline


n = int(input())


wrestlers = []

for _ in range(n):
    height, weight = map(int, input().split())  
    wrestlers.append((height,weight))

wrestlers.sort(key=lambda x : (x[0] ,x[1] ), reverse=True)

min_weight = 0
cnt = 0

for height, weight in wrestlers:
    if weight > min_weight:
        min_weight = weight
        cnt += 1

print(cnt)