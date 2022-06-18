import sys
input = sys.stdin.readline

A = int(input())
B = int(input())
C = int(input())

num_count = 0

multi = str(A*B*C)

# print(multi)

for i in range(10) :
    for num in multi:
        if int(num) == i:
            num_count+=1
    print(num_count)
    num_count = 0