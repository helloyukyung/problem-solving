import sys 
input = sys.stdin.readline
n, k = map(int, input().split()) 

circle_num = list(range(1,n+1))

answer =[]
num = 0 

while len(answer) != n :
    num = (num + (k -1)) % len(circle_num)
    answer.append(circle_num.pop(num))


print('<'+', '.join(map(str, answer))+'>')
