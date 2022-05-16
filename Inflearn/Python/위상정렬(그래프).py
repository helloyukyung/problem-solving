from collections import deque
import queue
import sys 
input = sys.stdin.readline

n, m = map(int, input().split())

#진입 차수 
indegree = [0] * (n+1)
graph = [[]for _ in range(n+1)]

for i in range(m):
    a, b = map(int, input().split())
    graph[a].append(b)
    indegree[b] += 1

def topology_sort():
    result = []
    queue = deque()
    for i in range(1,n+1):
        if indegree[i]== 0:
            queue.append(i)
    while queue:
        x = queue.popleft()
        result.append(x)
        for i in graph[x]:
            indegree[i] -= 1
            if indegree[i] == 0:
                queue.append(i)
    for i in result:
        print(i, end=" ")


topology_sort()