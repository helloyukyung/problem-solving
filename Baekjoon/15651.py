import sys
input = sys.stdin.readline

N,M = map(int, input().split())
stack = []
visited = [False for _ in range(N+1)]

def dfs():
    if len(stack) == M:
        print(*stack)
        return 

    for num in range(1, N+1):
        visited[num] = True
        stack.append(num)
        dfs()
        visited[num] = False
        stack.pop()

dfs()
