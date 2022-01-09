def solution(s):
    result = []
    if len(s) == 1:
        return 1 

    for i in range(1,(len(s)//2) + 1):
        cleft_str = ''# 매번 쪼갰을 때 나오는 문자열
        cnt = 1 # 문자열이 연속으로 반복되는지 체크하는 숫자
        tmp = s[:i] # 그다음 문자열과 연속되는지 보기 위한 변수

        for j in range(i,len(s),i):
            if tmp == s[j:i+j]:
                cnt += 1
            else:
                if cnt != 1:
                    cleft_str = cleft_str+str(cnt)+tmp
                else:
                    cleft_str=cleft_str+tmp
                tmp = s[j:i+j]
                cnt = 1
        if cnt != 1: # tmp에 담은 문자를 cleft_str에 추가
            cleft_str = cleft_str +str(cnt) +tmp
        else:
            cleft_str = cleft_str + tmp

        result.append(len(cleft_str))
    return min(result)