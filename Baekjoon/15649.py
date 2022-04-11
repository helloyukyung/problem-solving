import sys 
input = sys.stdin.readline

# input을 받아옴 
N, M = map(int, input().split())
visited = [False for _ in range(N+1)]
stack = []

def dfs():
    if len(stack) == M: # 만약 stack의 길이가 M과 같다면 
        print(*stack) # stack값들을 프린트 하고 return 
        return 

    for number in range(1,N+1): # number에는  1 ~ N +1까지 담김
        if not visited[number]:
            visited[number] = True
            stack.append(number)
            dfs()
            visited[number] = False #여기에는 return하고 들어온 애들이 옴 
            stack.pop()
            

dfs()