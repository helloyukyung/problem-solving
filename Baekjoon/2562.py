import sys 
input= sys.stdin.readline

num_list = []
count =1
max_n = 0

for i in range(1, 10):
    num_list.append(int(input()))
    
    for num in num_list:
        if num > max_n:
            max_n = num 
            count = i
           
print(max_n)
print(count)