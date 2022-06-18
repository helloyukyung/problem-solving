import sys 
input = sys.stdin.readline

N,M = map(int, input().split())
graph = list(map(int, input().split()))
graph.sort()
visited = [False for _ in range(N)]
stack = []

def dfs():
    if len(stack) ==  M:
        print(*stack)
        return 

    duplication = 0
    for num in range(N):
        if not visited[num] and duplication != graph[num]:
            visited[num] = True
            graph[num]
            stack.append(graph[num])
            duplication = graph[num]
            dfs()
            visited[num] = False
            stack.pop()
dfs()
