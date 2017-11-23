/**
  * @class Node
  * @property el The node's value / data
  * @property priority The node's priority
  * @property next The next node in the queue
  */

  class PQNode {
    constructor(element, priority) {
        this.el = element;
        this.priority = priority;
        this.next = null;
    }
}

/**
  * @class Queue
  * @property {Object} root The root node of the priority queue
  * @method enqueue @property {*} el @property {number} priority Enqueues node based on priority
  * @method dequeue @return {*} Removes and returns the front node's value (lowest priority node)
  * @method front @return {*} Returns but DOES NOT return the front node's value
  * @method size @return {number} Returns the queue's size
  * @method isEmpty @return {boolean}
  */

  // NOTE:
  // lowest priority takes precedence
  // equal priorities are dequeued by insertion order

class PriorityQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    enqueue(el, priority) {
        this.length++;

        if (!this.head) {
            this.head = new PQNode(el, priority);
            this.tail = this.head;
            return;
        }

        let currentNode = this.head;

        if (priority < currentNode.priority) {
            const newNode = new PQNode(el, priority);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        if (priority > this.tail.priority) {
            this.tail.next = new PQNode(el, priority);
            this.tail = this.tail.next;
            return;
        }

        while (currentNode) {
            if (priority >= currentNode.priority && priority < currentNode.next.priority ) {
                const newNode = new PQNode(el, priority);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
                return;
            }

            currentNode = currentNode.next;
        }
    }


    dequeue() {
        if (!this.head) {
            return null;
        }

        const el = this.head.el;
        this.head = this.head.next;
        this.length--;

        return el;
    }


    front() {
        if (!this.head) {
            return null;
        }

        return this.head.el;
    }


    isEmpty() {
        if (!this.head) {
            return true;
        }

        return false;
    }


    get size() {
        return this.length;
    }


    print() {
        if (!this.head) {
            return true;
        }

        return JSON.stringify(this.head, null, 2);
    }
}

// example usage:

const pQueue = new PriorityQueue();

pQueue.enqueue('five', 5);
pQueue.enqueue('ten', 10);
pQueue.enqueue('zero', 0);
pQueue.enqueue('three', 3);
pQueue.enqueue('nine', 9);
pQueue.enqueue('nine-a', 9);
pQueue.enqueue('twenty-four', 24);

console.log(pQueue.print() + '\n');
console.log('size: ' + pQueue.size);
console.log('front: ' + pQueue.front());
console.log('dequeue: ' + pQueue.dequeue());
console.log('dequeue: ' + pQueue.dequeue());
console.log('dequeue: ' + pQueue.dequeue());
console.log('dequeue: ' + pQueue.dequeue());
console.log('dequeue: ' + pQueue.dequeue());
console.log('dequeue: ' + pQueue.dequeue());
console.log('size: ' + pQueue.size + '\n');
console.log(pQueue.print());
