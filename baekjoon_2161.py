# 카드1
#https://www.acmicpc.net/problem/2161

#### 1

input = sys.stdin.readline

# 덱(파이썬에서는 일반 큐도 덱으로 사용)
from collections import deque
# N 입력 받음
N = int(input())
deleted_card_list = []# 버려진 카드 모아놓을 리스트

queue = deque(list(range(1, N+1)))# 1 부터 N까지 큐 초기화

while queue:
    # 1) 첫 번째 작업 : 재알 위에 있는 카드를 바닥에 버림
    deleted_card = queue.popleft()
    deleted_card_list.append(deleted_card)
    
    # 큐가 비었으면 반복문 종료
    if not queue:
        break

    # 2) 두 번째 작업 : 제일 위에 있는 카드 아래로 옮김
    top_card = queue.popleft()
    queue.append(top_card)

# 답 출력
print(*deleted_card_list)





#### 2
from collections import deque

N = int(input())
queue = deque([i for i in range(1, N+1)])
while len(queue) > 1: # 1보다 클때까지 반복
    print(queue.popleft(), end=' ') # 카드 버린거 출력 
    queue.append(queue.popleft()) # 그 다음 위에있는 카드 뒤로 보내기 
print(*queue)