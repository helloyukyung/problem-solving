# import sys
# input = sys.stdin.readline

T = int(input())

A= []
B= []

for _ in range(T):
    a, b =map(int, input().split())
    A.append(a)
    B.append(b)

for i in range(T):
    total = A[i]+B[i]
    print(total)