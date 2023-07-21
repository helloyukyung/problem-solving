const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift())

const map = input.map((row) => row.split("").map(Number))
const visited = new Array(n*n).fill(false);

const dx= [0,0,-1,1]
const dy = [-1,1,0,0]

const complexes = [];
let houses = 0;

function bfs (x ,y) {
    const queue = [];
    queue.push([x,y])
    houses = 0;

    while (queue.length) {
        const target = queue.shift()
        x = target[0]
        y = target[1]

        if (visited[x][y] === false) {
            visited[x][y] = true
            houses +=1
            for (let i = 0; i< 4; i++) {
                const xx = dx[i] + x
                const yy = dy[i] + y
                if (!(xx < 0 || xx >= n || yy < 0 || y >=n )){
                    queue.push(xx,yy)
                }
            }

        }
        complexes.push(houses)
    }
}

for(let i=0; i<n;i++) {
    for (let j=0; j < n; j++) {
        if (visited[i][j] !== false && map[i][j] === 1) {
            bfs(i,j)
        }
    }
}

complexes.sort((a, b) => a - b);
let answer = [complexes.length, ...complexes];
console.log(answer.join("\n"));