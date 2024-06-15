const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    // 루트 노드를 저장
    const root = this.heap[0];
    // 마지막 노드를 루트 노드로 옮기고, 마지막 노드를 제거
    // 왜 마지막 노드를 루트 노드로 옮기는가?
    // 힙은 완전 이진 트리이기 때문에 마지막 노드가 제일 마지막에 추가된 노드이다.
    // 따라서 마지막 노드를 루트 노드로 옮기면서 힙의 구조를 유지할 수 있다.
    this.heap[0] = this.heap.pop();
    // 새로운 루트 노드를 기준으로 heapifyDown
    this.heapifyDown(0);

    return root;
  }

  heapifyUp(index) {
    // 부모 노드의 인덱스를 구하는 공식 Math.floor는 내림을 해주는 함수
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown(index) {
    let largest = index;
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largest]
    ) {
      largest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largest]
    ) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest);
    }
  }
}

const [N, K] = input[0].split(" ").map(Number);
const jewels = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const bags = input.slice(N + 1, N + K + 1).map(Number);

// 보석을 무게 기준으로 오름차순 정렬
jewels.sort((a, b) => a[0] - b[0]);
// 가방을 무게 기준으로 오름차순 정렬
bags.sort((a, b) => a - b);

const maxHeap = new MaxHeap();
let totalValue = 0;
let jewelIndex = 0;
for (const bag of bags) {
  while (jewelIndex < jewels.length && jewels[jewelIndex][0] <= bag) {
    maxHeap.insert(jewels[jewelIndex][1]);
    jewelIndex++;
  }

  const maxVal = maxHeap.extractMax();
  if (maxVal !== null) {
    totalValue += maxVal;
  }
}
console.log(totalValue);
