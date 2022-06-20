function solution(nums) {
  let max = 0;
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      answer++;
    }
  }
  return answer;
}

students = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(students));
