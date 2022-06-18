import sys 
input =sys.stdin.readline

N, M = map(int, input().split())
graph =list(map(int, input().split()))
graph.sort()
stack = []

def dfs(start):
    if len(stack) == M:
        print(*stack)
        return 

    for num in range(start,N):
        stack.append(graph[num])
        dfs(num)
        stack.pop()

dfs(0)