function solution(word) {
  let newWord = [];

  for (let x of word) {
    if (x === "A") {
      newWord.push("#");
    } else newWord.push(x);
  }
  return newWord.join("");
}

console.log(solution("BANANA"));

function solution2(word) {
  let answer = "";
  for (let x of word) {
    if (x === "A") answer += "#";
    else answer += x;
  }
  return answer;
}

console.log(solution2("BANANA"));

function solution3(word) {
  let answer = word;
  answer = answer.replace(/A/g, "#");
  return answer;
}
console.log(solution3("BANANA"));
