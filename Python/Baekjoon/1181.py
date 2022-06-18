import sys 
input = sys.stdin.readline

n = int(input())
words =[]

for i in range(n):
    words.append(input().rstrip())

words = list(set(words))

words.sort()
words.sort(key = len)

for i in words:
    print(i)