function isAnagramF(sH, tH) {
  let isAnagram = true;
  for (let [key, value] of tH) {
    if (value !== sH.get(key)) {
      isAnagram = false;
      break;
    } else isAnagram = true;
  }

  return isAnagram;
}

function solution(s, t) {
  let answer = 0;
  let sH = new Map();
  let tH = new Map();

  sH.set("a", 0);
  sH.set("b", 0);
  sH.set("c", 0);
  sH.set("A", 0);

  for (let x of t) {
    if (tH.has(x)) {
      tH.set(x, tH.get(x) + 1);
    } else {
      tH.set(x, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (sH.has(s[i])) {
      sH.set(s[i], sH.get(s[i]) + 1);
    } else {
      sH.set(s[i], 1);
    }
  }
  if (isAnagramF(sH, tH)) answer++;
  for (let i = t.length; i < s.length; i++) {
    if (isAnagramF(sH, tH)) {
      answer++;
    }

    sH.set(s[i], sH.get(s[i]) + 1);
    sH.set(s[i - t.length], sH.get(s[i - t.length]) - 1);
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
