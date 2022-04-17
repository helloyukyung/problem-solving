import sys 
input = sys.stdin.readline 

N, M = map(int, input().split())
stack = []
visited = [False for _ in range(N+1)]

def dfs(start):
    if len(stack) == M:
        print(*stack)
        return 

    for num in range(start, N+1):
        if not visited[num]:
            visited[num]= True
            stack.append(num)
            dfs(num)
            visited[num]= False
            stack.pop()

dfs(1)