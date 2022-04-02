from inspect import trace
import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

K = int(input())

def dfs(v):
    global result
    visited[v] = 1
    traced.append(v) 
    w = graph[v] 
    if visited[w] == 1: 
        if w in traced: 
            result += traced[traced.index(w):] 
            print(result)
        return
    else:
        dfs(w) 



for _ in range(K):
    V = int(input()) 
    graph = [0] + list(map(int, input().split())) 
    visited = [0] * (V+1) 
    result = [] 


    for i in range(1, V+1): 
        if visited[i] == 0: 
            traced = []
            dfs(i)

    print(V - len(result))
