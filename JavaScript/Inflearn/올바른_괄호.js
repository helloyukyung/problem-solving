function solution(s) {
  let answer = "YES";
  stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push("(");
    } else {
      if (stack.includes("(")) stack.pop();
      stack.push(")");
    }
  }

  if (answer.length > 0) answer = "NO";
  return answer;
}

let a = "(()()))";
console.log(solution(a));
