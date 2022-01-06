import sys
input = sys.stdin.readline

answer =input().rstrip()

alphabet = []
for i in range(65,91):
    alphabet.append(chr(i))

alphabet_list = []
number_list = []

for i in range(len(answer)):
    if answer[i] in alphabet :
        alphabet_list.append(answer[i])
    else :
        number_list.append(int(answer[i]))

alphabet_answer="".join(sorted(alphabet_list))
number_sum = sum(number_list)

print(alphabet_answer,number_sum, sep="")
