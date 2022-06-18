import sys 
input = sys.stdin.readline

n = int(input())
graph = []
for i in range(n):
    graph.append(list(map(int, input().split())))

dy = [[0]*(n+1) for _ in range(n+1)]

def dfs(x, y):
    if x  == 0 and y == 0:
        return graph[x][y]
    else :
        if y == 0:
            return dfs(x-1,y) + graph[x][y]
        elif x == 0:
            return dfs(x, y-1) + graph[x][y]
        else :
            dy[x][y] = min(dfs(x-1,y) , dfs(x, y-1)) + graph[x][y]
            return dy[x][y] 

print(dfs(n-1,n-1))

# 5
# 3 7 2 1 9
# 5 8 3 9 2
# 5 3 1 2 3
# 5 4 3 2 1
# 1 7 5 2 4

# 내 이전 코드 
# def dfs(x, y):
#     if x  == 0 or y == 0:
#         return graph[x][y]
#     else :
#         dy[x][y] = min(dfs(x-1,y) , dfs(x, y-1)) + graph[x][y]
#         return dy[x][y] 

# print(dfs(n-1,n-1))
