# 시간복잡도 : n 미만 ;;
import sys
input = sys.stdin.readline

A, B, V = map(int, input().split())



N =(V-B)/(A-B)

if N > int(N):
    print(int(N)+1)
else :
    print(int(N))


# 시간복잡도 : n
# count = 0 
# day = 0 


# while True:
#     if count < V:
#         count += A
#         day += 1 
#         if count >= V:
#             break
#         else : 
#             count -= B
#     else : 
        
#         break
# print(day)
