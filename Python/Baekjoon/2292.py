import sys 
input = sys.stdin.readline

max_num = 1 
room = 1 

N = int(input())

while True :
    if N > max_num:
        max_num += 6*room
        room +=1
        continue
    else :
        break

print(room)