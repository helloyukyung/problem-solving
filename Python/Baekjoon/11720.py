import sys 
input = sys.stdin.readline

count = int(input())
sum_n = str(input()).rstrip()
total = 0

for i in range(count):
    total += int(sum_n[i])
print(total)