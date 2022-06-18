import sys
input = sys.stdin.readline

N= int(input())
score_list = list(map(int, input().split()))
max_score = score_list[0]
total=0

for score in score_list:
    if score > max_score :
        max_score = score 

for i in score_list:
    sum_score = i /max_score*100
    total +=sum_score

        

print(total/N)