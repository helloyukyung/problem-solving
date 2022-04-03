from collections import deque
import sys
input = sys.stdin.readline


n, m = map(int, input().split())
graph = []

for _ in range(n):
    graph.append(list(map(int,input().rstrip())))

visited = [[0 for _ in range(m)] for _ in range(n)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs():
    queue = deque()
    visited[0][0] == 1
    queue.append((0,0))
    while queue:
        x, y = queue.popleft()
        for way in range(4):
            xx = x + dx[way]
            yy = y + dy[way]
            if 0 <= xx < n and 0 <= yy < m  and graph[xx][yy] == 1:
                if visited[xx][yy] == 0 or visited[xx][yy] > visited[xx][yy] + 1:
                    visited[xx][yy]= visited[x][y]+1
                    queue.append((xx,yy))
                    




bfs()

print(visited[n-1][m-1]+1)