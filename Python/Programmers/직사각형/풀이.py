def solution(v):
    x_min = v[0][0] 
    y_min = v[0][1] 
    x_absolute = 0
    y_absolute = 0

    for i, j in v:
        if x_min > i:
            x_min = i
        if y_min > j:
            y_min = j
        if abs(v[0][0]- i) > 0:
            x_absolute = abs(v[0][0]- i)
        if abs(v[0][1]- j) > 0:
            y_absolute = abs(v[0][1]- j)

    all_v = [[x_min,y_min],[x_min,y_min+y_absolute],[x_min+x_absolute,y_min],[x_min+x_absolute, y_min+y_absolute]]

    for i in all_v:
        if not i in v:
            return i
    return 0