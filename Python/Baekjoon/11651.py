import sys
input = sys.stdin.readline

n = int(input())
marks = []

for i in range(n):
    marks.append(list(map(int,input().split())))
marks.sort(key = lambda x:(x[1],x[0]))

for i in marks:
    print(i[0],i[1])


