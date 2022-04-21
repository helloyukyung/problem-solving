from collections import deque
import sys 
input = sys.stdin.readline

def bfs():
    visited = []
    queue = deque()
    visited.append([home_x, home_y])
    queue.append([home_x, home_y])
    while queue:
        xx, yy = queue.popleft()
        if xx== festival_x and yy == festival_y:
            return print('happy')
        for load_x,load_y in coordinate:
            if abs(load_x-xx) + abs(load_y-yy) <= beer*50 and [load_x,load_y] not in visited :
                visited.append([load_x,load_y])
                queue.append([load_x, load_y])
    return print('sad')


# 입력 
N = int(input())
for i in range(N):
    T = int(input())
    # 집 위치
    home_x, home_y = map(int,input().split())
    # 편의점 위치 + 페스티벌 위치
    coordinate = []
    beer = 20
    for i in range(T+1):
        load_x, load_y = map(int, input().split())
        coordinate.append([load_x,load_y])
    # 페스티벌 위치
    festival_x, festival_y = coordinate[-1]
    bfs()