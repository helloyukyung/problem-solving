import sys
input = sys.stdin.readline

first_num = int(input().rstrip())
print(first_num)
second_num = input()
print(second_num)

print(first_num*second_num[2])
print(first_num*second_num[1])
print(first_num*second_num[0])
print(first_num*int(second_num))