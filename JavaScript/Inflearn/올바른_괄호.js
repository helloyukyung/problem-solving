function solution(s) {
  let answer = "YES";
  stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push("(");
    } else {
      if (stack.length === 0) return "NO";
      stack.push(")");
    }
  }

  if (answer.length > 0) answer = "NO";
  return answer;
}

let a = "(()()))";
console.log(solution(a));
