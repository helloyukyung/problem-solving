def substrings(arr):
  length = len(arr)
  alist = []
  for i in range(length):
    for j in range(i,length):
      alist.append(arr[i:j + 1]) 
  return alist

print(substrings('abcde'))