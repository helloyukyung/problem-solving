function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      let c = 0;

      switch (true) {
        case x === "+":
          c = a + b;
          break;
        case x === "-":
          c = a - b;
          break;
        case x === "*":
          c = a * b;
          break;
        case x === "/":
          c = a / b;
          break;
      }

      stack.push(c);
    }
  }
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
