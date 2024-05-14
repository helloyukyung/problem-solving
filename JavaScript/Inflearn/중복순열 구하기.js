function solution(n, m) {
  let arr = Array.from({ length: n }, (_, i) => {
    return i + 1;
  });

  let answer = [];
  function DFS(v) {
    if (v.length === m) {
      answer.push(v.join(" "));
    } else {
      for (let x of arr) {
        DFS([...v, x]);
      }
    }
  }

  DFS([]);
  answer.push(`${answer.length}`);
  return answer;
}

console.log(solution(3, 2));
