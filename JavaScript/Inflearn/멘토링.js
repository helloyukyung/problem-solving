function solution(test){
    let answer=0;
    const n=test[0].length // 학생 수
    const m=test.length // 테스트 수

     // i 멘토 j멘티
     for(let i=1; i<n+1; i++){
         for(let j=1;j<n+1;j++){
             let cnt=0
             for(let k=0;k<m;k++){
                 if(test[k].indexOf(i)<test[k].indexOf(j)){
                     cnt++
                 }
             }
             if(cnt === m){
                 answer++
             }
            cnt =0

         }
     }
    return answer

}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));

// 1. 조합을 만들어
// 2. (테스트 수)번만큼 for문을 돌려서
//     테스트 안에서
//     만약 조합 앞의 수가 뒤에 수보다 작으면 뺀다?
// 1,2
// 1,3
// 1,4
// 2,3
// 2,4
// 3,4
// 3. 나머지 조합의 length를 계산한다