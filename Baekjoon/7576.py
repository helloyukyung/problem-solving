from collections import deque
import sys
input = sys.stdin.readline

def bfs(dq):
    global zero_tomatos
    day = - 1
    while dq:
        day += 1
        for _ in range(len(dq)):
            i, j = dq.popleft()
            for way in range(4):
                ii = i + dx[way]
                jj = j + dy[way]
                if 0 <= ii < N and 0<= jj < M and box[ii][jj] == 0:
                    zero_tomatos -= 1
                    box[ii][jj] = 1
                    dq.append((ii, jj))
    return day

M, N = map(int, input().split())

box = [list(map(int, input().split())) for _ in range(N)]

zero_tomatos = 0

dx = [0,0,-1,1]
dy = [-1,1,0,0]

dq = deque()
for i in range(N):
    for j in range(M):
        if box[i][j] == 1:
            dq.append((i,j))
        elif box[i][j] == 0:
            zero_tomatos += 1
answer = bfs(dq)

print(answer if zero_tomatos == 0 else -1)