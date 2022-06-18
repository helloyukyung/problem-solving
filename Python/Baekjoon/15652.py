import sys 
input = sys.stdin.readline

N,M = map(int, input().split())
stack = []

def dfs(P):
    if len(stack) == M:
        print(*stack)
        return 

    for num in range(P, N +1):
        stack.append(num)
        dfs(num)
        stack.pop()

dfs(1)

