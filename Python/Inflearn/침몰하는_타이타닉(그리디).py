from collections import deque
import sys 
input = sys.stdin.readline

n,m = map(int, input().split())
passengers = list(map(int, input().split()))

passengers.sort()
passengers = deque(passengers)
count = 0

while passengers:
    if len(passengers) == 1:
        count += 1
        break
    if passengers[0] + passengers[-1] > m:
        passengers.pop()
        count += 1
    else:
        passengers.pop()
        passengers.popleft()
        count += 1
print(count)