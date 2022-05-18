import sys 
sys.stdin.readline

n,m =map(int, input().split())
music_list = list(map(int , input().split()))

left = 1
right = sum(music_list)
res = 0
maxx= max(music_list)
def Count(capacity):
    cnt = 1
    sum = 0 
    for x in music_list:
        if sum + x > capacity:
            cnt += 1
            sum = x
        else:
            sum += x
    return cnt

while left <= right:
    mid = (left +right) //2
    if mid > maxx and Count(mid) <= m:
        res = mid
        right = mid -1
    else:
        left = mid +1
print(res)

