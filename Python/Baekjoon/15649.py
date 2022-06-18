import sys 
input = sys.stdin.readline

N, M = map(int, input().split())
visited = [False for _ in range(N+1)]
stack = []

def dfs():
    if len(stack) == M:
        print(*stack) 
        return 

    for number in range(1,N+1): 
        if not visited[number]:
            visited[number] = True
            stack.append(number)
            dfs()
            visited[number] = False 
            stack.pop() 
            

dfs()