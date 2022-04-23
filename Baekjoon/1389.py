import sys 
from collections import deque
input = sys.stdin.readline

def bfs(x, want):
    queue = deque() 
    queue.append(x)
    while queue:
        xx = queue.popleft()
        if xx == want:
            return visited[xx]
        for i in graph[xx]: 
            if not visited[i]:
                visited[i] = visited[xx]+1
                queue.append(i)

N, M = map(int, input().split())
graph = [[] for _ in range(N+1)]
for _ in range(M):
    node_a , node_b = map(int, input().split())
    graph[node_a].append(node_b)
    graph[node_b].append(node_a)

ans = []
for i in range(1, N+1):
    i_ans = 0
    for j in range(1, N+1):
        visited = [0 for _ in range(N+1)]
        i_ans += bfs(i,j)
    ans.append(i_ans)

print(ans.index(min(ans))+1)
        

