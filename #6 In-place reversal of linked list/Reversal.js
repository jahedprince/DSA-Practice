class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  printList() {
    let temp = this;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  reverse() {
    let current = this;
    let previous = null;
    while (current) {
      let oldNext = current.next;
      current.next = previous;
      previous = current;
      current = oldNext;
    }
    return previous;
  }
}

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

head.printList();
head.reverse();
head.printList();
