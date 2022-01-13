# stack 
n = int(input())

for _ in range(n):
    words = list(input())
    stack = list()
    is_empty = False
    for i in range(len(words)):
        if words[i] == '(':
            stack.append(words[i])
        else:
            if not stack:
                is_empty = True
                break
            else:
                stack.pop()
    if not stack and not is_empty:
        print('YES')
    else:
        print('NO')