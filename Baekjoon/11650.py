import sys 
input= sys.stdin.readline

N = int(input())
marks = []

for i in range(N):
    marks.append(list(map(int, input().split())))

marks.sort()
for i in marks:
    print(i[0],i[1])