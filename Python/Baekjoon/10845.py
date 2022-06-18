import sys 
input = sys.stdin.readline


N = int(input())
Que = []

for i in range(N):
    word = input().split()
    order = word[0]

    if order == 'push': 
        value = word[1]
        Que.append(value)
    elif order == 'pop': 
        if Que:
            print(Que.pop(0))
        else:
            print(-1)
    elif order == 'size':
         print(len(Que))
    elif order == 'empty':
        if len(Que) == 0:
            print(1)
        else: 
            print(0)
    elif order == 'front':
        if len(Que) == 0 :
             print(-1)
        else : print(Que[0])
    elif order == 'back':
        if len(Que) == 0 :
             print(-1)
        else : print(Que[-1])