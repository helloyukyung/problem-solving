import sys 
input = sys.stdin.readline

N, M = map(int, input().split())
graph = list(map(int, input().split()))
graph.sort() 

visited = [False for _ in range(N)]
stack =[]

def dfs():
    if len(stack) == M :
        print(*stack)
        return 
    
    for num in range(N):
        if not visited[num]: 
            visited[num]= True
            stack.append(graph[num])
            dfs()
            visited[num]= False
            stack.pop()

dfs()