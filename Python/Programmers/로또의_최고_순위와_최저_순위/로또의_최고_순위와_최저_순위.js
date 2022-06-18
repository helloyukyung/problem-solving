function solution(lottos, win_nums) {
  const zeroCount = lottos.filter((e) => e === 0).length;
  const matchCount = win_nums.filter((e) => lottos.includes(e)).length;
  const matchToRank = [6, 6, 5, 4, 3, 2, 1];
  const lowRank = matchToRank[matchCount];
  const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount];
  return [highRank, lowRank];
}
