import sys
input= sys.stdin.readline

reminder=[]
num_reminder=[]

for i in range(10):
    num = int(input())
    reminder.append(num%42)
    for num in reminder:
        if num not in num_reminder:
            num_reminder.append(num)
        
print(len(num_reminder))