import math
import sys 
input = sys.stdin.readline
# f(n) = 1+ min(f(n//3), f(n//2),f(n-1))

def sol():
    n = int(input())
    arr = [0,0,1,1]
    for i in range(4, n+1):
        one, two, three = math.inf, math.inf, arr[i-1]
        if i % 3 == 0:
            one = arr[i//3]
        if i % 2 == 0:
            two = arr[i//2]
        arr.append(1 + min(one, two, three))
    print(arr[n])