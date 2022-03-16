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
            print(visit_count[x])
            break
        for i in (x+1, x-1, x*2):
            if 0 <= i <= max_k and not visit_count[i]:
                visit_count[i] = visit_count[x] +1
                queue.append(i)


max_k =100000
visit_count = [0]*(max_k+1)

bfs()
