import sys 
input = sys.stdin.readline

H, M = map( int, input().split())


if  M - 45 >= 0:
    print(H, M-45)
else :
    H=24 if H==0 else H
    print(H-1, M-45+60)