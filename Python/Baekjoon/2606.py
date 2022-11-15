import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
m = int(input())

graph = [[]for _  in range(n+1)]
visited = [False for _ in range(n+1)]

for _ in range(m):
    vertex1, vertex2 = map(int, input().split())
    graph[vertex1].append(vertex2)
    graph[vertex2].append(vertex1)

def bfs():
   count = 0
   queue = deque()
   visited[1] = True
   queue.append(1)
   while queue:
    x = queue.popleft()
    for i in graph[x]:
        if not visited[i]:
            count +=1
            visited[i] = True
            queue.append(i)
    print(count)

bfs()

# 큐에 집어넣기전에 방문처리..





