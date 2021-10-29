#시간복잡도 O(n)

import sys 
input = sys.stdin.readline

word = str(input()).rstrip().upper()
word_list = list(set(word))

total = []
for i in word_list:
  count = word.count
  total.append(count(i))
# print(total)

if total.count(max(total)) > 1:
  print("?")
else:
  print(word_list[(total.index(max(total)))])