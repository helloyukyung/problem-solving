import sys
# sys.setrecursionlimit(10**9)
input = sys.stdin.readline

N,M = map(int, input().split())
stack = []
visited = [False for _ in range(N+1)]

def dfs():
    if len(stack) == M:
        print(*stack)
        return 

    for num in range(1, N+1): # 1, 2, 3
        visited[num] = True
        stack.append(num)
        dfs()
        visited[num] = False
        stack.pop()

dfs()

# stack

# stack 
# 1 dfs() 1 dfs() print() pop 

# 1 2 dfs() print pop 

# 1 3 dfs() print pop 

# 1 4 dfs() print pop 

# 1 pop

# 2 1 dfs()  print pop