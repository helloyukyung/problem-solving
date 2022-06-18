import sys
input = sys.stdin.readline

numbers = input().rstrip()
answer = 0

for i in numbers:
    if i =="0" or i =="1" or answer == 0:
        answer += int(i)
    else:
        answer *= int(i)

print(answer)

# keyword = 예약어 내장함수, in 
