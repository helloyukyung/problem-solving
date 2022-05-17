import sys
input = sys.stdin.readline

k, n = map(int, input().split())

lan = [] 


for i in range(k):
    lan.append(int(input()))

def is_work(n):
    count = 0
    for i in range(k):
        count += (lan[i] // n)
    return count

left = 1
right = max(lan)
answer = 0 

while left <= right:
    mid = (left + right) // 2

    if is_work(mid) >= n:
        answer = mid
        left = mid + 1
    else:
        right = mid - 1
    
print(answer)