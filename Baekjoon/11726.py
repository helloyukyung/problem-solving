n = int(input())

d = [0]*(n+2)
d[1] = 1
d[2] = 1

for i in range(3,n+2):
    d[i] = d[i-1] + d[i-2]
    
print(d)
print(d[n+1])