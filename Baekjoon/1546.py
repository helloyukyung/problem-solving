import sys
input = sys.stdin.readline

N= int(input())
score_list = list(map(int, input().split()))
Max_score = score_list[0]
total=0

for score in score_list:
    if score > Max_score :
        Max_score = score 

for i in score_list:
    sum_score =i /Max_score*100
    total +=sum_score

        


print(total/N)