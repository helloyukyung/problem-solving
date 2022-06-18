import sys
input = sys.stdin.readline

N = int(input())


for _ in range(N):
    student_sum=0
    over_avg = 0 
    student_list = list(map(int, input().split()))
    student_N = student_list[0]
    student_list= student_list[1:]

    # print(student_list)
    for s in student_list:
        student_sum += s
    total_average = student_sum/student_N
    # print(total_average)
    
    for a in student_list:
        if a > total_average:
            over_avg+=1
    total= round(over_avg/student_N*100,3)

    print(f"{total:.3f}%")
