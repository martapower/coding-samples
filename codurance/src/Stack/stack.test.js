var Stack = require ('./Stack.js');

describe('Stack', () => {
  it('should push an object', () => { // not necessary, as pop tests the both of them
    var stack = new Stack();

    stack.push({name: 'test'});
    expect(stack.content).toEqual([{name: 'test'}]); // encapsulation! use pop
  });

  it('should take the last inserted object out', () => { // naming! use pop
    var stack = new Stack();

    stack.push({name: 'test'});
    stack.push({name: 'second test'});

    expect(stack.pop()).toEqual({name: 'second test'});
    // expect(stack.content).toEqual([{name: 'test'}]);
  });

  it('should throw an exception if popped when empty', () => {
    var stack = new Stack();
    expect(function() {
      var object = stack.pop();
    }).toThrow();
  });
})
