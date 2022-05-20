import sys 
input = sys.stdin.readline

l = int(input())
box_list = list(map(int, input().split()))
m = int(input())

box_list.sort()

print(box_list)

for i in range(m):
    box_list[-1] -= 1 
    box_list[0] += 1
    box_list.sort()


print(box_list[-1] - box_list[0])