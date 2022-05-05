def solution(s):
    visited = [False for _ in range(len(s))]
    number = ["1","2","3","4","5","6","7","8","9","0"]
    answer = []

    for i in range(len(s)):
        if visited[i] == True:
            continue
        if s[i] in number:
            answer.append(s[i])
            visited[i] = True 
        if s[i:i+4] == "zero":
            answer.append("0")
            visited[i:i+4] == True
        if s[i:i+3] == "one":
            answer.append("1")
            visited[i:i+3] == True
        if s[i:i+3] == "two":
            answer.append("2")
            visited[i:i+3] == True
        if s[i:i+5] == "three":
            answer.append("3")
            visited[i:i+5] == True
        if s[i:i+4] == "four":
            answer.append("4")
            visited[i:i+4] == True
        if s[i:i+4] == "five":
            answer.append("5")
            visited[i:i+4] == True
        if s[i:i+3] == "six":
            answer.append("6")
            visited[i:i+3] == True
        if s[i:i+5] == "seven":
            answer.append("7")
            visited[i:i+5] == True
        if s[i:i+5] == "eight":
            answer.append("8")
            visited[i:i+5] == True
        if s[i:i+4] == "nine":
            answer.append("9")
            visited[i:i+4] == True
    ans = ""
    for i in answer: 
        ans += i
    return int(ans)