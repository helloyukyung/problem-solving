# 이진 탐색 
# 시간 복잡도 :O(logN)

import sys 
input = sys.stdin.readline

n = int(input())
list_n = list(map(int, input().split()))
list_n.sort()

m = int(input())
targets = list(map(int, input().split()))


def binary(target):
    left = 0  
    right = n - 1
    while left <= right :
        mid =(left +right) // 2
        if list_n[mid] == target:
            return True 
        if target < list_n[mid]:
            right = mid -1 
        elif target > list_n[mid]:
            left = mid + 1
            
for i in range(m):
    if binary(targets[i]):
        print(1)
    else:
        print(0)
        


