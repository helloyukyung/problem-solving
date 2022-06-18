import sys 
input = sys.stdin.readline 

N,M,K = map(int, input().split())

array = sorted(list(map(int,input().split())),reverse =  True)

max1 = array[0]
max2 = array[1]

count = M
answer = 0 

while True:
    for i in range (K):
        if count ==0:
            break
        answer += max1
        count -= 1 
    if count == 0:
        break
    answer += max2
    count -= 1



print(answer)

