import sys
input = sys.stdin.readline

N= str(input()).rstrip()

alphabet="abcdefghijklnmopqrstuvwxyz"
ALPHABET=alphabet.upper()
number = list(range(10))
str_number = list(map(str,range(10)))

if N in str_number :
    for j in number:
        if int(N) == j:
            answer = 48 + j
            print(answer)
else :
    for i in range(len(alphabet)):
        if N == alphabet[i]:
            answer = 97 + int(i)
            print(answer)
        elif N == ALPHABET[i]:
            answer = 65 + int(i)
            print(answer)