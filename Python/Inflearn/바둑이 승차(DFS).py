import re
import sys 
input = sys.stdin.readline


def DFS (L,sum, tsum):
    global result
    if sum + (total - tsum) <result:
        return
    if sum > c:
        return 
    if L == n:
        if sum > result :
            result = sum
    else:
        DFS(L+1, sum +a[L], tsum + a[L])
        DFS(L+1, sum, tsum + a[L])

c, n = map(int, input().split())
a  =[]
for _ in range(n):
    a.append(int(input()))
total  = sum(a)
result = -2147000000
DFS(0,0,0)
print(result)