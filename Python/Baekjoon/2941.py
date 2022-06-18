import sys
input = sys.stdin.readline

word = ["c=", "c-", "dz=", "d-","lj", "nj", "s=", "z="]

input_data = input().rstrip()
count = 0

for i in word:
  input_data = input_data.replace(i, '*')

print(len(input_data))