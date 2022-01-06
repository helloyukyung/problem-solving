n = int(input())
money_type = list(map(int, input().split()))


def solution(n, money_type):
    money_type.sort()
    result = 1
    
    for money in money_type:
        if result <= money:
            break
        result += money
    
    return result

solution(n, money_type)
