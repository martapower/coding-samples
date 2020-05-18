class Stack {
  constructor() {
    this.content = [];
  }

  push(object) {
    this.content.push(object);
  }

  pop() {
    if (this.content.length === 0) {
      throw new Error('Empty stack');
    }
    return this.content.pop();
  }

};

module.exports = Stack;
