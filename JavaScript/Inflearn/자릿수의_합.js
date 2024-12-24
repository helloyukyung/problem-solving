function solution(n, arr) {
  let answer = 0;
  let max = 0;
  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => {
        Number(a) + Number(b);
      }, 0);
    if (sum > max) {
      answer = x;
      max = sum;
    } else if (sum === max) {
      answer = Math.max(x, answer);
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
