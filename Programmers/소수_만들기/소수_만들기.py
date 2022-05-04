import math 

count = 0

def is_prime_number(x):
    if x == 0 or x == 1:
        return False
    for i in range(2, int(math.sqrt(x))+1):
        if x % i == 0:
            return True
    return False 

def solution(nums):
    res = [0] * 3
    n = len(nums)

    def dfs(L, idx):
        global count 
        if L == 3:
            if not is_prime_number(sum(res)):
                count += 1
            return 
        else:
            for i in range(idx, n):
                res[L] = nums[i]
                dfs(L+1,i+1)
    dfs(L=0, idx=0)

    return count