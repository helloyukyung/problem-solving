##1
import sys 
input =  sys.stdin.readline


N= int(input())
list_N=list(map(int, input().split()))

max = list_N[0]
min = list_N[0]

for i in list_N[1:]:
    if i > max:
        max = i
    elif i < min:
        min = i
    
print(min, max)
## 2
# n.sort()
# print(n[0],n[-1])
