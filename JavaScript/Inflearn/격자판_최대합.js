function solution(arr){
    let answer = [0,0,0,0,0]
    let 대각선 = [0,0]
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++){
            answer[i] += arr[i][j]
            if (i==j){
                대각선[0] += arr[i][j]
            }
            if (i+j === arr.length) {
                대각선[1] += arr[i][j]
            }
        }
    }

    return Math.max(...answer,...대각선);
}

let arr=[[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]];
console.log(solution(arr));