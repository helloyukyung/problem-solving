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
