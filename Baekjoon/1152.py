import sys 
input = sys.stdin.readline

sentence = input().strip()
s_split= sentence.split(" ")
# print(s_split)

if s_split == ['']:
    print(0)
else :
    print(len(s_split))  