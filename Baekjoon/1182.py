import sys 
input = sys.stdin.readline

n, s = map(int, input().split())
num_list = list(map(int, input().split()))
ans = 0 

def subset_num(idx, total):
    global ans 

    if idx >= n:
        return 

    total += num_list[idx]
    if total == s:
        ans += 1
    subset_num(idx + 1, total - num_list[idx])
    subset_num(idx + 1, total)

subset_num(0,0)
print(ans)
