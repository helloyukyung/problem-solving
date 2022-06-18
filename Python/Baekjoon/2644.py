from collections import deque
import sys 
input = sys.stdin.readline

n = int(input().rstrip()) # 전체 사람 수 
a, b = map(int, input().split())# 촌수를 계산해야 하는 두 사람의 번호 
m = int(input())# 부모와 자식들 간의 관개 개수

graph = [[]for _ in range(n+1)]
visited = [0 for _ in range(n+1)]

for i in range(m):
    x, y = map(int, input().split())
    graph[x].append(y)
    graph[y].append(x)


def bfs(a):
    queue = deque([])
    visited[a] = 1
    queue.append(a)
    while queue:
        x = queue.popleft()
        if x == b: 
            return 0 
        for i in graph[x]:
            if visited[i] == 0: 
                visited[i] += visited[x] + 1
                queue.append(i)

bfs(a)
print(visited[b]-1)
