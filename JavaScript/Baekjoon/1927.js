const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = parseInt(input[0]);

class MinHeap {
  constructor() {
    this.nodes = [];
  }

  insert(value) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  bubbleUp(index = this.nodes.length - 1) {
    if (index < 1) return;

    const currentNode = this.nodes[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.nodes[parentIndex];

    if (parentNode <= currentNode) return;

    this.nodes[index] = parentNode;
    this.nodes[parentIndex] = currentNode;

    this.bubbleUp(parentIndex);
  }

  extract() {
    const min = this.nodes[0];
    if (this.nodes.length === 1) {
      this.nodes.pop();
      return min;
    }

    this.nodes[0] = this.nodes.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    let minimum = index;

    if (!this.nodes[leftChildIndex] && !this.nodes[rightChildIndex]) return;

    if (!this.nodes[rightChildIndex]) {
      if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }
    } else {
      if (this.nodes[leftChildIndex] < this.nodes[minimum]) {
        minimum = leftChildIndex;
      }

      if (this.nodes[rightChildIndex] < this.nodes[minimum]) {
        minimum = rightChildIndex;
      }
    }

    if (minimum !== index) {
      let t = this.nodes[minimum];
      this.nodes[minimum] = this.nodes[index];
      this.nodes[index] = t;
      this.trickleDown(minimum);
    }
  }
}

const minHeap = new MinHeap();
let result = "";

for (let i = 1; i <= N; i++) {
  const x = parseInt(input[i]);

  if (x === 0) {
    result += minHeap.nodes.length === 0 ? "0\n" : minHeap.extract() + "\n";
  } else {
    minHeap.insert(x);
  }
}

console.log(result);
