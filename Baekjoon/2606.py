from collections import deque
import sys 
input = sys.stdin.readline 


n = int(input()) # 컴퓨터의 수
m = int(input()) # 연결되어 있는 컴퓨터 쌍

graph = [[] for _ in range(n+1)]
visited = [False for _ in range(n+1)]

for i in range(m):
    vertex_1, vertex_2 = map(int, input().split())
    graph[vertex_1].append(vertex_2)
    graph[vertex_2].append(vertex_1)


def bfs():
    queue = deque()
    count = -1
    queue.append(graph[1])
    while queue:
        x = queue.popleft()
        for i in x:
            if not visited[i]:
                visited[i] = True
                count += 1
                queue.append(graph[i])
    print(count)

bfs()