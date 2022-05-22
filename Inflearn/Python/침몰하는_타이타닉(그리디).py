from collections import deque
import sys 
input = sys.stdin.readline

n,m = map(int, input().split())
passengers = list(map(int, input().split()))
passengers.sort()

count = 0

while len(passengers) > 0:
    if passengers[0] + passengers[-1] <= m:
        passengers = passengers[1:-1]
        count += 1
    elif passengers[0] + passengers[-1] > m:
        passengers = passengers[:-1]
        count += 1 
print(count)