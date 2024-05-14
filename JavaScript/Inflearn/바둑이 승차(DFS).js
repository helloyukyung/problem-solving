function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(v, sum) {
    if (v === arr.length) {
      if (sum > answer) {
        answer = sum;
      }
    } else {
      if (sum + arr[v] < c) {
        DFS(v + 1, sum + arr[v]);
      }
      DFS(v + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
