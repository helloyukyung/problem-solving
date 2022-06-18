import sys 
input = sys.stdin.readline

stack_1 = list(input().rstrip())
stack_2 =[]
N = len(stack_1)
M = int(input())

for _ in range(M):
    commend = input().split()
    if commend[0] == "L" and stack_1:
        stack_2.append(stack_1.pop())
    elif commend[0] == "D" and stack_2:
        stack_1.append(stack_2.pop())
    elif commend[0] == "B" and stack_1:
        stack_1.pop()
    elif commend[0] == "P":
        stack_1.append(commend[1])

print("".join(stack_1+list(reversed(stack_2))))