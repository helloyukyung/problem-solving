from collections import deque
import sys 
input = sys.stdin.readline 


n = int(input())
m = int(input())

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
    while queue :
        x = queue.popleft()
        for i in x:
            if not visited[int(i)] :
                visited[int(i)] = True
                count += 1
                queue.append(graph[i])
    print(count)

bfs()
