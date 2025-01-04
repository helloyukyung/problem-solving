function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const dictionary = [];
  let flag = false;
  function dfs(cur) {
    if (cur.length > 5 || flag) return;
    dictionary.push(cur);
    if (cur === word) {
      flag = true;
      return;
    }
    for (let i of vowels) {
      dfs(cur + i);
    }
  }
  dfs("");

  return dictionary.indexOf(word);
}
