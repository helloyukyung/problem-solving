#시간복잡도 :O(n^2)

import sys 
input = sys.stdin.readline

Test_case = int(input())
total = []

for _ in range(Test_case):
    repeat , string = input().split()
    repeat = int(repeat)
    string = str(string).rstrip()
    
    for i in range(len(string)):
        mul_n = string[i]*repeat
        print(mul_n, end="")
    print("")

