import sys 
input =sys.stdin.readline 

number = int(input())

A = list(map(int, input().split()))
B = list(map(int, input().split()))
B_list = B


answer = 0

for i in range(number):
    answer += min(A)*max(B)
    A.pop(A.index(min(A)))
    B.pop(B.index(max(B)))

print(answer)