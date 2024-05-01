function solution(n, k, card){
    let answer;
    let tmp= new Set()

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            for(let s=j+1;s<n;s++){
                tmp.add(card[i]+card[j]+card[s])
            }
        }
    }
    let a= Array.from(tmp).sort((a,b)=>b-a)
    console.log(k)
    answer =a[k-1]
    console.log(a)
    return answer
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));