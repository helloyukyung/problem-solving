import sys 
input = sys.stdin.readline

coumputer = int(input())
connected_computers = int(input())

graph =[[] for _ in range(coumputer+1)]
visited = [0]*(coumputer+1)

for _ in range(connected_computers):
    vertex1,vertex2 = map(int, input().split())
    graph[vertex1].append(vertex2)
    graph[vertex2].append(vertex1)

virus_computer = -1 
def dfs(num):
    global virus_computer
    if visited[num] == 0 :
            virus_computer += 1
            visited[num] = 1
    else :
        return 0
    for i in graph[num] :
        dfs(i)
        
dfs(1)
print(virus_computer)