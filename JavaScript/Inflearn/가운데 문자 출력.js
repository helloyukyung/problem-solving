function solution(str) {
  let len;
  let len2;
  if (str.length % 2 == 0) {
    len = parseInt(str.length / 2);
    return str[len];
  } else {
    len = parseInt(str.length / 2);
    len2 = parseInt(str.length / 2) + 1;
    return [str[len], str[len2]].join("");
  }
}

console.log(solution("study"));
