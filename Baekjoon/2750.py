import sys 
input = sys.stdin.readline

n = int(input())

list_n = []
for i in range(n):
    list_n.append(int(input().rstrip()))
    list_n.sort()

for i in list_n:
    print(i)

