import sys 
from math import gcd 
input = sys.stdin.readline

N = int(input())
first_section = int(input())

# 가로수 간격 arr
arr = []
# 가로수들 사이의 간격
for i in range(N-1):
    num = int(input())
    arr.append(num -first_section)
    first_section = num

g = arr[0]
for j in range(1,len(arr)):
    g = gcd(g,arr[j])

result = 0 
for each in arr:
    result += each //g-1
print(result)
