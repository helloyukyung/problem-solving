function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    if (answer.includes(x)) {
      let idx = answer.indexOf(x);
      for (let i = idx; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
      answer[0] = x;
    } else {
      answer = [x, ...answer];
      answer.pop();
    }
  });

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
