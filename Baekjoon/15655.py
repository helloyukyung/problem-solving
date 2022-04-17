import sys 
input = sys.stdin.readline

N,M = map(int, input().split())

graph = list(map(int, input().split()))
visited = [False for _ in range(N)]
graph.sort()

stack = []

def dfs(start):
    if len(stack) == M:
        print(*stack)
        return 

    for num in range(start,N):
        if not visited[num]:
            visited[num] = True
            stack.append(graph[num])
            dfs(num+1)
            visited[num] = False
            stack.pop()

dfs(0)