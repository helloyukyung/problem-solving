from collections import deque
import sys 
input = sys.stdin.readline

def bfs(x,y,safe_area):
    queue = deque()
    visited[x][y] = True
    queue.append((x,y))
    while queue :
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N:
                if graph[nx][ny] >= safe_area and not visited[nx][ny]:  
                    visited[nx][ny] = True
                    queue.append((nx,ny))

N = int(input())
graph = []
for _ in range(N):
    graph.append(list(map(int, input().split())))

graph_min = min(map(min,graph))
graph_max = max(map(max,graph))

dx = [-1,1,0,0]
dy = [0,0,1,-1]

max_safe_area = graph_min

for safe_area in range(graph_min,graph_max + 1):
    visited = [[False] * N for _ in range(N)]
    temp = 0
    for i in range(N):
        for j in range(N):
            if graph[i][j] >= safe_area and not visited[i][j]:
                bfs(i,j,safe_area)
                temp += 1
    if temp >  max_safe_area:
        max_safe_area = temp
        
print(max_safe_area)

