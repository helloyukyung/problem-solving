from collections import deque
import sys 
input = sys.stdin.readline

def bfs():
    queue = deque()
    queue.append((0,0))
    while queue:
        i, j = queue.popleft()

        if i == n-1 and j == m-1:
            print(visited[i][j]+1)
            return 

        for way in range(4):
            ii = i + di[way]
            jj = j + dj[way]

            if ii < 0 or ii > n -1 or jj < 0 or jj > m-1:
                continue

            if maze[ii][jj] == 1 and not visited[ii][jj]:
                # print(ii,jj,count)
                queue.append((ii,jj))
                visited[ii][jj] += visited[i][j] + 1

n, m = map(int, input().split())
maze = []

for _ in range(n):
    maze.append(list(map(int,input().rstrip())))

visited = [[0 for _ in range(m)] for _ in range(n)]

di = [0, 0, 1, -1]
dj = [1, -1, 0, 0]


bfs()
