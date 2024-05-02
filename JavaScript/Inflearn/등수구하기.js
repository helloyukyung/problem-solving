function solution(arr){
    let answer = []
    const temp = [...arr].sort()
    for (let i of arr) {
        let rank = temp.indexOf(i)
        answer.push(`${rank+1}`)
    }
    return answer;
}

let arr=[87, 89, 92, 100, 76];
console.log(solution(arr));