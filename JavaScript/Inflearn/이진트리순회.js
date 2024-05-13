function solution(v) {
  let answer = "";
  function dfs(v) {
    if (v > 7) return;
    else {
      dfs(v * 2);
      dfs(v * 2 + 1);
    }
  }
  dfs(v);

  return answer;
}

console.log(solution(1));
