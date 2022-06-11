function solution(numbers) {
  let min = numbers[0];
  for (const item of numbers) {
    if (min > item) {
      min = item;
    }
  }

  return min;
}
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
