function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let ch = Array.from({ length: n + 1 }, () => 0);

  for (let [a, b] of arr) {
    graph[a].push(b);
  }

  let path = [];
  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let x of graph[v]) {
        console.log(x);
        if (ch[x] === 0) {
          ch[x] = 1;
          path.push(x);
          DFS(x);
          ch[x] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  ch[1] = [1];
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
