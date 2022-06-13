function solution(arr) {
  let max1 = 0,
    max2;

  for (let x of arr) {
    if (x > max1) {
      max2 = max1;
      max1 = x;
    }
  }

  return arr.filter((item) => {
    item !== max1 && item !== max2;
  });
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
