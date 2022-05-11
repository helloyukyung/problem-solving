import sys 
input = sys.stdin.readline

n = int(input())

dy = [0]*(n+1)

def dfs(num):
    if dy[num] > 0: #안에 값이 담겨 있으면 해당 index 값을 이용 
        return dy[num]
    if num == 1 or num == 2:
        return num
    else :
        dy[num] = dfs(num-1) + dfs(num-2)
        return dy[num]

print(dfs(n))