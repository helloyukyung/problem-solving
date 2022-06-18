from collections import deque
import sys 
input = sys.stdin.readline



def bfs(queue):
    count = 0 
    while queue:
        i, j = queue.popleft()
        count += 1

        for w in range(4):
            x = i + dx[w]
            y = j + dy[w]
            
            if x < 0 or x > N-1 or y < 0 or y > N-1: 
                continue

            if graph[x][y] == "1" and not visited[x][y]:
                visited[x][y] = True
                queue.append((x,y))

    num.append(count)


# 데이터를 받아옴 
N = int(input())
graph = [list(input().rstrip()) for _ in range(N)]
visited = [[False for _ in range(N)] for _ in range(N)]

# 방향벡터 
dx = [1,-1,0,0]
dy = [0,0,1,-1]

# 값 리스트 
num = []

for i in range(N):
    for j in range(N):
        if graph[i][j]== "1" and not visited[i][j]: 
            visited[i][j] =True
            queue = deque()
            queue.append((i,j))
            bfs(queue)
            

print(len(num))

for answer in sorted(num):
    print(answer)
