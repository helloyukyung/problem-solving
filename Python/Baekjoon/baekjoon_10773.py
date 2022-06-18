##제로 


##https://www.acmicpc.net/problem/10773

k= int(input)

num_list=[]

for i in range(k):
    num=int(input())# 재현이 가 부르는 수 받기 
    if num==0:
        num_list.pop()# 잘못 부른 수 지우기
    else:
        num_list.append(num)# 잘 부른 수는 받기 
print(sum(num_list)) # 합계