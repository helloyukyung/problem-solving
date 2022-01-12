import sys
input = sys.stdin.readline

n = int(input())
n_list = list(map(int, input().split()))
n_list.sort()
m = input()

def binary_search(num):
    l = 0
    r = n-1
    while l <= r :
        mid = (l+r)//2
        if n_list[mid] == num :
            return 1
        elif n_list[mid] > num :
            r = mid - 1
            # 반 줄여주기 1
        else:
            l = mid + 1
            # 반 줄여주기 2
    return 0

m_list = list(map(int, input().split()))
for i in m_list:
    print(binary_search(i), end =" ")