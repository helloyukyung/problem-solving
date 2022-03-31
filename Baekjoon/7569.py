import sys
from collections import deque
m,n,h = map(int,input().split()) 
graph = []
queue = deque([])

for i in range(h):
    tmp = [] # 상자 판 하나
    for j in range(n):
        tmp.append(list(map(int,sys.stdin.readline().split())))
        for k in range(m):
            if tmp[j][k] == 1:
                queue.append([i,j,k]) # 높이 세로 가로 # 익은 토마토 좌표를 queue에 넣어줌
    graph.append(tmp)

dx = [-1,1,0,0,0,0]
dy = [0,0,1,-1,0,0]
dz = [0,0,0,0,1,-1]

while(queue):
    x,y,z = queue.popleft()
    for way in range(6):
        xx = x + dx[way] # 높이 
        yy = y + dy[way] # 세로 
        zz = z + dz[way] # 가로
        if 0 <= xx < h and 0 <= yy < n and 0 <= zz < m and graph[xx][yy][zz]==0:
            graph[xx][yy][zz] = graph[x][y][z] + 1
            queue.append([xx,yy,zz])

day = 0

for i in graph:
    for j in i:
        for k in j:
            if k==0:
                print(-1)
                exit(0)
    day = max(day,max(j))


print(day-1)
