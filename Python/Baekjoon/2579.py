import sys 
input = sys.stdin.readline

def sol():
    n = int(input().rstrip())
    arr = [0]
    for _ in range(n):
        x = int(input().rstrip())
        arr.append(x)
    g = [0, 0]
    h = [0, arr[1]]
    for i in range(2, n+1):
        g.append(h[i-1]+ arr[i])
        h.append(max(h[i-2], g[i-2]) + arr[i])
    print(max(g[n],h[n]))


sol()