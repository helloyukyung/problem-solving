import sys 
input = sys.stdin.readline 

n = int(input())

meeting = []

for i in range(n):
    start, end = map(int, input().split())
    meeting.append(end-start)

print(meeting)
meeting.sort()

count = 0 
for i in range(n):
    count += meeting[i] 
    if count >= 