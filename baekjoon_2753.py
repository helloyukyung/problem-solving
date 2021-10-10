import sys 
input = sys.stdin.readline

answer = int(input())

if (answer % 4 == 0 and(answer % 100 != 0 or answer % 400 == 0)):
    print(1)
else :
    print(0)

