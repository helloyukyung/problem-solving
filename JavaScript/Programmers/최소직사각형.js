function solution(sizes) {
    let sortedSizes = []; 
    let answer= 0;
    let maxWidth = 0
    let maxHeight = 0
    // 정렬
    for (let i = 0;  i < sizes.length; i++) {
        sortedSizes.push(sizes[i].sort((a,b)=> a-b))
    }
    // 최대값 구하기
    for (let i = 0; i < sizes.length; i++) {
        if (sortedSizes[i][0] > maxWidth) { 
            maxWidth = sortedSizes[i][0]
        }
        if (sortedSizes[i][1] > maxHeight) {
            maxHeight = sortedSizes[i][1]
        }
    }

     // 답   
    return maxWidth * maxHeight;
}