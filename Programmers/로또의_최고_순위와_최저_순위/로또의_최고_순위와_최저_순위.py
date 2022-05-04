import sys 
input = sys.stdin.readline

lottos = [45, 4, 35, 20, 3, 9]
win_nums =[20, 9, 3, 45, 4, 35]
def solution(lottos, win_nums):
    lottos.sort(reverse =True)
    win_nums.sort(reverse =True)
    zero_count = 0 
    match_count = 0
    rank = { 6:1 ,5:2, 4:3, 3:4 ,2 :5 , 1:6, 0 :6}
    for i in lottos:
        if i == 0:
            zero_count += 1
    
    for i in range(6):
        for j in range(6):
            if lottos[i] == win_nums[j]:
                match_count += 1
    print(zero_count+match_count,zero_count)
    answer = [rank[zero_count+match_count], rank[match_count]]
    return print(answer)

solution(lottos,win_nums)