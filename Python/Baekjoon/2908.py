import sys
input = sys.stdin.readline

num_a, num_b = input().split()

new_a = num_a[2]+num_a[1]+num_a[0]
new_b = num_b[2]+num_b[1]+num_b[0]

if new_a > new_b:
    print(new_a)
else:
    print(new_b)