import sys
from collections import deque

input = sys.stdin.readline
deq = deque([])

count = int(input())

for _ in range(count):
    word = input().split()
    order = word[0]
    if order == "push_front":
        deq.append(word[1])
    if order == "push_back":
        deq.appendleft(word[1])
