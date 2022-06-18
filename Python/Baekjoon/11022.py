##1
import sys
input = sys.stdin.readline

count = int(input())

for i in range(count):
    A, B = map(int, input().split())
    total = A + B
    print(f"Case #{i+1}: {A} + {B} = {total}")

##2
    print("Case #%d: %d + %d = %d" %(i+1,A,B,total))


# print(type(A))
# print(type(B))
# print(type(total))
# print(type(i))

