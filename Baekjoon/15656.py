import sys 
input = sys.stdin.readline 

N,M = map(int, input().split())

graph = list(map(int, input().split()))
graph.sort()
stack =[]

def dfs():
    if len(stack) == M:
        print(*stack)
        return 

    for num in range(N):
        stack.append(graph[num])
        dfs()
        stack.pop()

dfs()