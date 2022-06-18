import sys 
input = sys.stdin.readline

score = input()

length = len(score) //2
score_left = score[:length]
score_right = score[length:]

sum_left = 0
sum_right = 0

for i in range(length):
    sum_left += int(score_left[i])
    sum_right+= int(score_right[i])
if sum_left == sum_right:
    print("LUCKY")
else :
    print("READY")
