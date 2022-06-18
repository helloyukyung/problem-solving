import sys
input = sys.stdin.readline

count = int(input())
list_A =[]
list_B =[]

for _ in range(count):
    A, B= map(int, input().split())
    list_A.append(A)
    list_B.append(B)

for i in range(count):
    total = list_A[i]+list_B[i]
    print("Case #{0}: {1}".format(i+1,total))

