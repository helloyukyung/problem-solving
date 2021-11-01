import sys 
input = sys.stdin.readline 

alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet= alphabet.upper()
number = input()
count = 0


for i in range(len(number)) :
    if number[i] in alphabet[0:3]:
        count += 2+1
    elif number[i] in alphabet[3:6]:
        count += 3+1
    elif number[i] in alphabet[6:9]:
        count += 4+1
    elif number[i] in alphabet[9:12]:
        count += 5+1
    elif number[i] in alphabet[12:15]:
        count += 6+1
    elif number[i] in alphabet[15:19]:
        count += 7+1
    elif number[i] in alphabet[19:22]:
        count += 8+1
    elif number[i] in alphabet[22:26]:
        count += 9+1
print(count)
