function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (true) {
    if (queue.length === 1) break;
    for (let i = 1; i < k + 1; i++) {
      if (i === k) {
        queue.shift();
      } else {
        let a = queue.shift();
        queue.push(a);
      }
    }
  }

  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
