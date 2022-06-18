import sys 
input = sys.stdin.readline

n, m = map(int, input().split())
dis =[[5000]*(n+1) for _ in range(n+1)]

for i in range(1, n+1):
    dis[i][i] = 0 # 자기 자신은 0 

# 최초 입력 i to j(아무것도 거치지 않음)
for i in range(m):
    a,b,c =map(int, input().split())
    dis[a][b] = c

# 플로이드 와샬
# i to k to j와 i to j 비교하여 갱신 
for k in range(1, n+1):
    for i in range(1,n+1):
        for j in range(1,n+1):
            dis[i][j] = min(dis[i][j], dis[i][k]+ dis[k][j])

for i in range(1, n+1):
    for j in range(1,n+1):
        if dis[i][j]== 5000:
            print("M", end=" ")
        else:
            print(dis[i][j], end =" ")
    print()
