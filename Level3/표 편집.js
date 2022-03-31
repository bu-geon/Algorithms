class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.HEAD = new Node('HEAD');
    this.TAIL = new Node('TAIL');

    this.HEAD.next = this.TAIL;
    this.TAIL.previous = this.HEAD;

    this.selectedNode = this.HEAD;
    this.deleted = [];
  }

  append(node) {
    this.TAIL.previous.next = node;
    node.previous = this.TAIL.previous;
    node.next = this.TAIL;
    this.TAIL.previous = node;
  }

  move(count, direction) {
    while (count--) {
      this.selectedNode = this.selectedNode[direction];
    }
  }

  delete() {
    this.selectedNode.previous.next = this.selectedNode.next;
    this.selectedNode.next.previous = this.selectedNode.previous;
    this.deleted.push(this.selectedNode);
    this.selectedNode =
      this.selectedNode[
        this.selectedNode.next === this.TAIL ? 'previous' : 'next'
      ];
  }

  unDelete() {
    const recoverNode = this.deleted.pop();
    console.log(recoverNode);
    console.log(recoverNode.previous);
    console.log(recoverNode.previous.next);
    recoverNode.next.previous = recoverNode;
    recoverNode.previous.next = recoverNode;
  }
}

function solution(n, k, cmd) {
  const doubleLinkedList = new DoubleLinkedList(k);

  for (let i = 0; i < n; i++) {
    doubleLinkedList.append(new Node(i));
  }

  doubleLinkedList.move(k + 1, 'next');
  cmd.forEach((c) => {
    const [type, count] = c.split(' ');

    switch (type) {
      case 'U':
        doubleLinkedList.move(count, 'previous');
        break;
      case 'D':
        doubleLinkedList.move(count, 'next');
        break;
      case 'C':
        doubleLinkedList.delete();
        break;
      case 'Z':
        doubleLinkedList.unDelete();
        break;
    }
  });

  const result = Array(n).fill('X');
  let currentNode = doubleLinkedList.HEAD.next;
  while (currentNode !== doubleLinkedList.TAIL) {
    result[currentNode.data] = 'O';
    currentNode = currentNode.next;
  }

  return result.join('');
}

console.log(
  solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'])
);
console.log(
  solution(8, 2, [
    'D 2',
    'C',
    'U 3',
    'C',
    'D 4',
    'C',
    'U 2',
    'Z',
    'Z',
    'U 1',
    'C',
  ])
);
