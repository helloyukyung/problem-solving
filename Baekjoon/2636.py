from collections import deque
import sys
input = sys.stdin.readline 

N, M = map(int, input().split())
graph = []
visited = [[False for _ in range(M)]for _ in range(N)]
for i in range(N):
    graph.append(list(map(int, input().split())))

ans = []
dx = [1, -1,0,0]
dy = [0,0,1,-1]
def bfs():
    queue = deque()
    queue.append([0,0])
    visited[0][0] = True 
    cnt = 0
    while queue:
        x,y = queue.popleft()
        for num in range(4):
            xx = x + dx[num]
            yy = y + dy[num]
            if 0 <= xx < N and 0 <= yy < M and not visited[xx][yy]:
                if graph[xx][yy] == 0:
                    visited[xx][yy] = True 
                    queue.append([xx,yy])
                elif graph[xx][yy] == 1:
                    graph[xx][yy] = 0
                    visited[xx][yy] = True 
                    cnt += 1
    ans.append(cnt)
    return cnt

time = 0

while True:
    time +=1
    visited = [[False]*M for _ in range(N)]
    cnt = bfs() 
    if cnt == 0:
        break
print(time-1)
print(ans[-2])