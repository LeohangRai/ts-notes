class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let counter = 0;
    let pointer = this.head;
    while (pointer.next) {
      counter++;
      pointer = pointer.next;
    }
    return counter;
  }

  add(data: number): void {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    /*
    loop through the LinkedList until the pointer points to NULL, at which point, it will be the tail Node.
    */
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    pointer.next = newNode;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of bounds!");
    }
    if (index < 0) {
      throw new Error("Invalid index");
    }
    let counter = 0;
    let currNode = this.head;
    while (counter < index) {
      if (!currNode.next) {
        throw new Error("Index out of bounds!");
      }
      currNode = currNode.next;
      counter++;
    }
    return currNode;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("Empty List!");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  /* 
  only swaps the values of the nodes, does not swap the nodes themselves 
  */
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const temp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = temp;
  }

  print(): void {
    if (!this.head) {
      return;
    }
    let resultString = "";
    let pointer: Node | null = this.head;
    while (pointer) {
      resultString += `${pointer.data} `;
      pointer = pointer.next;
    }
    console.log(resultString);
  }
}
