function solution(need, plan) {
  let answer = "YES";
  let queue = need.split("");

  for (let x of plan) {
    if (x === queue[0]) {
      queue.shift();
    }
  }

  console.log(queue);
  if (queue.length > 0) answer = "NO";
  return answer;
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));
