def self(num):
    this = list(str(num))

    if( len(this) == 1):
        num += int(this[0])
    else:
        for i in this:
            num += int(i)

    return num


mylist = [0]*10000

for i in range(1,10001):
    while True:
        #print(i)
        i = self(i)
        if i >= 10000: break
        
        mylist[i-1] = 1

#print(mylist)
for i in range(9999):
    if mylist[i] == 0:
        print(i+1)
