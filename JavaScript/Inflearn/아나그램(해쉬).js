function solution(str1, str2) {
  let answer = "YES";
  let sH1 = new Map();
  let sH2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (sH1.has(str1[i])) {
      sH1.set(str1[i], sH1.get(str1[i]) + 1);
    } else {
      sH1.set(str1[i], 1);
    }
    if (sH2.has(str2[i])) {
      sH2.set(str2[i], sH2.get(str2[i]) + 1);
    } else {
      sH2.set(str2[i], 1);
    }
  }

  for (let [key, value] of sH1) {
    if (value !== sH2.get(key)) return (answer = "NO");
  }
  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
