#시간복잡도 O(1)?

import sys 
input = sys.stdin.readline

S= str(input()).rstrip()

alphabet="abcdefghijklmnopqrstuvwxyz"


for i in alphabet:
    if i in S:
        print(S.index(i), end= ' ')
    else:
        print(-1, end =' ')

