from collections import deque
import sys 
input = sys.stdin.readline


dx = [0,0,1,-1]
dy = [1,-1,0,0]

t = int(input())

def bfs(graph, a, b):
    queue = deque() 
    queue.append((a,b))
    graph[a][b] = 0

    while queue:
        x, y = queue.popleft()
        for way in range(4):
            nx = x + dx[way]
            ny = y + dy[way]
            if nx < 0 or nx >= n or ny < 0 or ny >= m:
                continue
            if graph[nx][ny] == 1:
                graph[nx][ny] = 0
                queue.append((nx,ny))
        return 

for i in range(t):
    cnt = 0
    n, m, k = map(int,input().split())
    graph = [[0]*m for _ in range(n)]

    for j in range(k):
        x, y = map(int, input().split())
        graph[x][y] = 1

    for a in range(n):
        for b in range(m):
            if graph[a][b] == 1:
                bfs(graph, a, b)
                cnt += 1
    print(cnt)