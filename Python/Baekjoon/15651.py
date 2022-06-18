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
        stack.append(num)
        dfs()
        stack.pop()

dfs()
