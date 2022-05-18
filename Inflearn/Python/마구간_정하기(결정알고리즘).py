from re import L
import sys 
input = sys.stdin.readline

n, c= map(int, input().split())
horse = [] 
for i in range(n):
    horse.append(int(input()))

horse.sort()

left = 1
right = horse[-1] - horse[0]

def Count(len):
    cnt = 1 
    ep = horse[0]
    for i in range(1, n):
        if horse[i] - ep >= len:
            cnt+=1
            ep = horse[i]
    return cnt

while left <= right:
    mid = (left + right) //2
    if Count(mid) >= c :
        res = mid 
        left = mid +1
    else:
        right = mid -1

print(res)