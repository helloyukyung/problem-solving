import sys 
input = sys.stdin.readline

numbers = input()

count0 = 0
count1 = 0 

if numbers[0] == '1':
    count0 += 1
else :
    count1 += 1


for i in range(len(numbers)-1):
    if numbers[i] != numbers[i+1]:
        if numbers[i+1] == '1':
            count0 += 1
        else :
            count1 += 1
print(min(count0,count1))
