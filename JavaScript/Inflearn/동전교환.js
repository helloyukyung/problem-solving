function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  arr.sort((a, b) => b - a);

  function DFS(v, sum) {
    if (v > answer) return;
    if (sum > m) return;
    if (sum === m) {
      answer = Math.min(answer, v);
    } else {
      for (let x of arr) {
        DFS(v + 1, sum + x);
      }
    }
  }
  DFS(0, 0);

  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
