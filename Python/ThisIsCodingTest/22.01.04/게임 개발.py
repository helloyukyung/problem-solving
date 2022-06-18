import sys 
input = sys.stdin.readline

n, m =  map(int, input().split())

# 방문한 위치를 저장하기 위한 맵을 생성하여 0으로 초기화 
d = [[0]*m for _ in range(n)]
# 캐릭터의 x좌표 ,y좌표 ,방향 입력 
x, y, direction = map(int, input().split())


matrix = []

for i in range(n):
    matrix.append(list(map(int, input().split())))

# 처음 캐릭터의 위치는 array[x][y]

## L,R,U,D
dx = [0,0,-1,1]
dy = [-1,1,0,0]


def turn_left():
    global direction
    direction -= 1
    if direction == -1:
        direction = 3

count = 1 
turn_time = 0 

while True:
    # 왼쪽으로 회전 
    turn_left()
    # 움직임 
    nx = x + dx[direction]
    ny = y + dy[direction]
    # 회전한 이후 정면에 가보지 않은 칸이 존재하는 경우 이동 
    # if d[nx][ny]: