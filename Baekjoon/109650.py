import sys
input = sys.stdin.readline
T = int(input())
for _ in range(T):
    total =sum(list(map(int, input().split())))
    print(total)