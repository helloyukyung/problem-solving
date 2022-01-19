import sys 
input = sys.stdin.readline

def n_queens(i, col):
    global count
    n = len(col)-1 # 0이 있으므로 
    if (promising(i,col)):
        if(i == n): # n은 depth
            count += 1
            print(col[1:n+1])
        else:
            for j in range(1,n+1):
                col[i+1]= j
                n_queens(i+1,col)

def promising(i,col):
    k = 1
    flag = True
    while (k <i and flag):
        if (col[i] == col[k] or abs(col[i]-col[k])==(i-k)):
            flag=False
        k += 1 
    return flag


n= int(input())
col=[0] * (n+1)
count= 0

n_queens(0,col)
print(count)
