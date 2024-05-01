function solution(n, k, card){
    let answer;
    card.sort((a,b)=> {return b-a})
    let cnt = 0;
    for(let i=0;i<card.length;i++){
        for(let j=0;j<card.length;j++){
            for(let s=0;s<card.length;s++){
                if(cnt===k) break
                if(i==j||i==s||j==s) continue
                answer=card[i]+card[j]+card[s]
                cnt++
            }
        }
    }
    return answer
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));