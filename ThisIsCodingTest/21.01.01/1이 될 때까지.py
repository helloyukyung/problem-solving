import sys 
input = sys.stdin.readline

n , k = map(int, input().split())

other = n % k

if other != 0:
    answer = other + 2 
    print(answer)
else :
    print(2)