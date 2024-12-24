function solution(n, arr) {
  let answer = 0;
  let max = 0;
  for (let x of arr) {
    let strX = String(x);
    let tempMax = 0;
    for (let i = 0; i < String(x).length; i++) {
      tempMax += Number(strX[i]);
    }
    if (tempMax > max) {
      answer = x;
      max = tempMax;
    } else if (tempMax === max) {
      answer = Math.max(x, answer);
      max = tempMax;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
