from collections import deque
import sys 
input = sys.stdin.readline

n, k = map(int,input().split())

def bfs():
    queue = deque()
    queue.append(n)
    while queue:
        x = queue.popleft()
        if x == k:
            print(dist[x])
            break
        for i in (x+1, x-1, x*2):
            if 0 <= i <= max_k and not dist[i]: # dist[i]가 0의 값을 가질 시 => 1은 이미 방문 했으므로 
                dist[i] = dist[x] + 1
                queue.append(i)


max_k = 100000
dist = [0]*(max_k+1)

bfs()
