## 수 정렬하기 3
# ====문제 
#N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.

# ====입력 
# 첫째 줄에 수의 개수 N(1 ≤ N ≤ 10,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 수가 주어진다. 이 수는 10,000보다 작거나 같은 자연수이다.

#----풀이 
# 입력을 받아주고 배열을 생성, 
# 배열에는 각 숫자의 개수가 들어가게 되고, 그 숫자 수만큼 풀력 


import sys # 빠른 입력을 위해 

N = int(sys.stdin.readline()) # 반복문으로 여러줄을 입력 받아야 할 때는 input()으로 입력 받으면 시간초과가 발생할 수 있음.
nums = []
result = [0 for _ in range(10001)]

for i in range(N):
    num = int(sys.stdin.readline())
    result[num] += 1 
    
for i in range(len(result)): 
    for j in range(result[i]):
        print(i)

