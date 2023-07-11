function solution(answers) {
  let answer = [];

  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer1 = answers.filter(
    (answer, index) => answer === pattern1[index % pattern1.length]
  ).length;
  const answer2 = answers.filter(
    (answer, index) => answer === pattern2[index % pattern2.length]
  ).length;
  const answer3 = answers.filter(
    (answer, index) => answer === pattern3[index % pattern3.length]
  ).length;

  let maxAnswer = Math.max(answer1, answer2, answer3);
  const correctAnswer = [answer1, answer2, answer3];

  for (let i = 0; i < correctAnswer.length; i++) {
    if (maxAnswer == correctAnswer[i]) answer.push(i + 1);
  }

  return answer;
}
