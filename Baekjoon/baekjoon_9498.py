import sys 
input = sys.stdin.readline

answer = int(input())

if  answer >= 90:
    print("A")
elif answer >= 80 :
    print("B")
elif answer >=  70:
    print("C")
elif answer >= 60:
    print("D")
else :
    print("F")