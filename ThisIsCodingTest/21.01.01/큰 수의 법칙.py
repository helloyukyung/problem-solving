import sys 
input = sys.stdin.readline 

N,M,K = map(int, input().split())

array = sorted(list(map(int,input().split())),reverse =  True)

max1 = array[0]
max2 = array[1]

count = M
answer = 0 

while count!=0 :
    print(count)
    count = count -1 


#  오늘 하구 자기 



