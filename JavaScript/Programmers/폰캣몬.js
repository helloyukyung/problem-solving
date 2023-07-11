function solution(nums) {
  const maxLength = nums.length / 2;
  const settedLength = new Set(nums).size;

  return settedLength > maxLength ? maxLength : settedLength;
}
