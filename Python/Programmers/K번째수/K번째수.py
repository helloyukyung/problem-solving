def solution(array, commands):
    answer = []
    sliced_array = []
    picked = 0
    for i,j,k in commands:
        sliced_array = array[i-1:j]
        sliced_array.sort()
        picked = sliced_array[k-1]
        answer.append(picked)
    return answer
