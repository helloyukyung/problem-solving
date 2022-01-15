import sys
from collections import deque
input = sys.stdin.readline

def dfs(num):
    dfs_visited[num] = True
    print(num, end=" ")
    for i in sorted_graph[num]:
        if dfs_visited[i] == False:
            dfs_visited[i] = True
            dfs(i)


def bfs(num):
    queue = deque([num])
    bfs_visited[num] = True
    while queue:
        vertex = queue.popleft()
        print(vertex, end =" ")
        for i in sorted_graph[vertex]:
            if bfs_visited[i] == False:
                queue.append(i)
                bfs_visited[i] = True

N, M, v = map(int,input().split())
bfs_visited = [False]*(N+1)
dfs_visited = [False]*(N+1)

graph =[[] for _ in range(N +1)]
for i in range(1,M+1):
    node1, node2 = map(int, input().split())
    graph[node1].append(node2)
    graph[node2].append(node1)

sorted_graph = []
for i in graph:
    sorted_graph.append(sorted(i))
    

dfs(v)
print()
bfs(v)

