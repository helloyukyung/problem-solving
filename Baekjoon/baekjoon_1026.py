# 보물 
# https://gudwns1243.tistory.com/55

# 왜 제목이 보물일까 진짜 1도 보물아닌데
 
# 풀이 
# a는 정렬을 해주어 순서대로 뽑고,  b는 pop()을 이용해 최댓값부터 뽑아 서로 곱해 answer에 더하기

import sys

input = sys.stdin.readline

n = int(input())
a = list(map(int, input().split()))
b = list(map(int, input().split()))

answer = 0
a.sort()
for i in range(n):
    x = a[i]
    y = b.pop(b.index(max(b)))

    answer += x * y
    
print(answer)