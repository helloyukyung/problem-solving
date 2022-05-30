import sys 
input = sys.stdin.readline 

n = int(input())
sequence = list(map(int, input().split()))
memo = [0]*(n)
memo[0] = sequence[0]

for i in range(1,n):
    if memo[i-1] + sequence[i] >= sequence[i]:
        memo[i] = memo[i-1] + sequence[i] 
    else:
        memo[i] =  sequence[i] 


print(max(memo))