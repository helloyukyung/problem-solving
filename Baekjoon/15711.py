import sys
input=sys.stdin.readline

t=int(input())

max_num = 2000001
prime= [False, False] + [True for _ in range(max_num-1)]
for i in range(2,int((max_num**0.5))+1):
    if prime[i]:
        for j in range(i+i,max_num,i):
            prime[j]= False 

decimal=[]

for i in range(2,max_num):
    if prime[i] == True:
        decimal.append(i)

def isPrime(n):
    if n > max_num:
        for s in decimal:
            if s >= n:
                break
            elif n % s == 0:
                return False
        return True
        
    else:
        return prime[n]


for _ in range(t):
    x , y= map(int, input().split())
    x += y
    if x < 4: 
        print('NO')
    elif x % 2==0: 
        print('YES')
    else:
        x -= 2
        if isPrime(x): 
            print('YES')
        else: 
            print('NO')