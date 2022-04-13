import sys 
input = sys.stdin.readline

N, M = map(int, input().split())
visited = [False for _ in range(N+1)]
stack = []

def dfs(start):
    if len(stack) == M:
        print(*stack) 
        return 

    for number in range(start,N+1): 
        if not visited[number]:
            visited[number] = True
            stack.append(number)
            dfs(start +1)
            visited[number] = False 
            stack.pop() 
            

dfs(1)