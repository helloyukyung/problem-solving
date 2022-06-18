import sys
input = sys.stdin.readline

case = int(input())


for i in range(case):
    quiz = list(input())
    # print(quiz)
    score = 0
    sum_score=0
    for q in quiz:
        if q =="O":
            score +=1
        else :
            score = 0
        sum_score += score
    print(sum_score)


