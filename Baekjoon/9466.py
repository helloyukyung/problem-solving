import sys
input = sys.stdin.readline
sys.setrecursionlimit(10 ** 7)


def dfs(target):
    global answer

    visit[target] = True
    cycle.append(target)
    next_target = sel[target]

    if visit[next_target]:
        if next_target in cycle:
            answer += cycle[cycle.index(next_target):]
        return
    else:
        dfs(next_target)

t = int(input())

for _ in range(t):
    n = int(input())
    sel = [0] + list(map(int, input().split()))
    visit = [False] * (n + 1)
    answer = []

    for i in range(1, n + 1):
        if not visit[i]:
            cycle = []
            dfs(i)
                
    print(n - len(answer))