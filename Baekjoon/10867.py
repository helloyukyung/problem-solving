import sys
input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split()))

numbers= list(set(numbers))
numbers.sort()

for i in numbers:
    print(i, end =" ")