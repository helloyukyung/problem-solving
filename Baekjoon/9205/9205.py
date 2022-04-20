import sys 
from collections import deque
input = sys.stdin.readline

def bfs(x,y):
    queue = deque([[x,y]])
    visit = [[x,y]]
    while queue :
        x,y = queue.popleft()
        if x == rock_x and y == rock_y:
            print('happy')
            return
        print(next)
        for nx, ny in next :
            if [nx,ny] not in visit:
                if abs(nx-x) + abs(ny-y) <= beer*50:
                    queue.append([nx,ny])
                    visit.append([nx,ny])
    print('sad')
    return 

for i in range(int(input())):
    n = int(input())
    beer = 20
    home_x, home_y = map(int, input().split())
    next = []
    for i in range(n+1):
        x,y = map(int, input().split())
        next.append([x,y])
    rock_x, rock_y = next[-1][0], next[-1][1]
    bfs(home_x,home_y)