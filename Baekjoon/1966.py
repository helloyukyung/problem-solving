import  sys 
input = sys.stdin.readline

test_cases =int(input())

for _ in range(test_cases):
    n,m = list(map(int, input().split()))
    impact = list(map(int, input().split()))
    idx = list(range(len(impact)))
    idx[m] ='target'

    order = 0 
    while True :
        if impact[0] == max(impact):
            order += 1
            if idx[0]== 'target':
                print(order)
                break 
            else:
                impact.pop(0)
                idx.pop(0)
        else:
            impact.append(impact.pop(0))
            idx.append(idx.pop(0))
            