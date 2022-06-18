from collections import deque
import sys 
input = sys.stdin.readline

graph = []
m,n,h = map(int, input().rsplit())
queue = deque()

for i in range(h):
    box = []
    for j in range(n):
        box.append(list(map(int,input().split())))
        for k in range(m):
            if box[j][k] == 1:
                queue.append([i,j,k]) # 높이 세로 가로 
    graph.append(box)

dx = [-1,1,0,0,0,0]
dy = [0,0,1,-1,0,0]
dz = [0,0,0,0,1,-1]

def bfs(queue):
    while queue:  
        x,y,z = queue.popleft()
        for way in range(6):
            xx = x + dx[way]
            yy = y + dy[way]
            zz = z + dz[way]
            if  0 <= xx < h and 0 <= yy < n and 0 <= zz < m and graph[xx][yy][zz]== 0:
                graph[xx][yy][zz] = graph[x][y][z] + 1
                queue.append((xx,yy,zz))
bfs(queue)

day = 0

for i in graph:
    for j in i:
        for k in j:
            if k == 0:
                print(-1)
                exit(0)
        day = max(day,(max(j)))

print(day-1)