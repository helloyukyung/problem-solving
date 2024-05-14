function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === ps.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7]; // 점수
let pt = [5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt));
