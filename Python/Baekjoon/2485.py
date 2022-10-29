import sys
input = sys.stdin.readline

n  = int(input())

def gcd(a,b): #  gcd(min_length, dis)
    if (b == 0):
        return a
    else:
        return gcd(b, a%b)

arr =[]

for i in range(n):
    arr.append(int(input()))

distances = []

for i in range(len(arr) - 1):
    distances.append(abs(arr[i+1]-arr[i]))

temp = distances[0]

for i in distances:
    temp = gcd(temp, i)

len_arr = (max(arr)-min(arr))//temp +1

print(len_arr-len(arr))

