def solution(numbers):
    ans = 45 
    for i in numbers:
        ans -= i
    return ans