import sys 
input = sys.stdin.readline

n = int(input())
array = sorted(map(int, input().split()),reverse=True)

count = n
answer = 0

for i in array:
    if count <= 0:
        break
    count -= i
    answer += 1 

print(answer)