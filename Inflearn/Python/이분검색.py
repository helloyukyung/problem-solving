import sys 
input = sys.stdin.readline

n, m = map(int, input().split())
data = list(map(int, input().split()))

def binary_search(target, data):
    data.sort()
    start = 0 
    end = len(data) - 1
    while start <= end:
        mid = (start + end ) // 2
        if data[mid] == target:
            return mid 
        elif data[mid] < target:
            start = mid + 1
        else :
            end = mid -1 

    return None

print(binary_search(m, data)+1)

# 바이너리 서치 재귀적 구현 (python)
def binary_search_recursion(target, start, end, data):
    if start > end :
        return None 
    mid = (start +  end ) // 2

    if data[mid] == target:
        return mid 
    elif data[mid] > target:
        end = mid - 1
    else : 
        start = mid + 1
    return binary_search_recursion(target, start, end, data)
print(binary_search_recursion(m, 0, n, data)+1)