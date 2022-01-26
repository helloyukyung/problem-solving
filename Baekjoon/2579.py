import sys
input = sys.stdin.readline

def solve():
    n = int(input())
    arr =[0]
    for _ in range(n):
        x = int(input())
        arr.append(x)
    g = [0, 0] # 전 계단에서 올라옴
    h = [0, arr[1]]  ## 전전 계단에서 올라옴
    for i in range(2,n+1):
        g.append(h[i-1]+arr[i])
        h.append(max(h[i-2],g[i-2])+ arr[i])
    print(max(g[n],h[n]))

solve() 