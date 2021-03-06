/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
  // implement me...
  this.capacity = capacity;
  this.currentIndex = 0;
  this.frontIndex = 0;
  this.items = {};
}

Queue.prototype.enqueue = function(value) {
  // implement me...
  if (Object.keys(this.items).length < this.capacity) {
    this.items[this.currentIndex] = value;
    this.currentIndex += 1;
  } else {
    return "Max capacity already reached. Remove element before adding a new one.";
  }
};
// Time complexity:

Queue.prototype.dequeue = function() {
  // implement me...
  const item = this.items[this.frontIndex];
  delete this.items[this.frontIndex];
  this.frontIndex += 1;

  return item;
};
// Time complexity:

Queue.prototype.peek = function() {
  // implement me...
  return this.items[this.frontIndex];
};

Queue.prototype.count = function() {
  // implement me...
  return Object.keys(this.items).length;
};
// Time complexity:

Queue.prototype.contains = function(query) {
  for (let key in this.items) {
    if (this.items[key] === query) {
      return true;
    }

    return false;
  }
};

Queue.prototype.until = function(query) {
  let counter = 0;
  for (let i = this.frontIndex; i < this.currentIndex; i += 1) {
    counter += 1;
    if (this.items[i] === query) {
      return counter;
    }
  }

  return -1;
};

const teller = new Queue(10);
console.log(teller.count());
teller.enqueue("Person 1");
teller.enqueue("Person 2");
teller.enqueue("Person 3");
console.log(teller.until("Person 3"));
console.log(teller.until("Person 1"));
console.log(teller.count());
console.log(teller.dequeue());
console.log(teller.count());
console.log(teller.peek());
console.log(teller.contains("Person 2"));

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
