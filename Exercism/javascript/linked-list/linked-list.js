class Node {
    constructor(prev = null, val = null, next = null) {
        this.prev = prev;
        this.val = val;
        this.next = next;
    }
}

export default class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(nodeVal) {
        if (this.tail) {
            this.tail = new Node(this.tail, nodeVal, null)
            this.tail.prev.next = this.tail;
        } else {
            this.tail = this.head = new Node(null, nodeVal, null);
        }
        this.length++;
    }
    pop() {
        if (this.tail !== null) {
            const tail = this.tail.val
            this.tail = this.tail.prev;
            this.tail ?
                this.tail.next = null :
                this.head = this.tail = null;
            this.length--;
            return tail;
        }
    }
    unshift(nodeVal) {
        if (this.head) {
            this.head = new Node(null, nodeVal, this.head)
            this.head.next.prev = this.head;
        } else {
            this.head = this.tail = new Node(null, nodeVal, null);
        }
        this.length++;
    }

    shift() {
        if (this.head !== null) {
            const head = this.head.val
            this.head = this.head.next;
            (this.head) ?
                this.head.next = null :
                this.head = this.tail = null;
            this.length--;
            return head;
        }
    }

    count() {
        return this.length;
    }

    delete(nodeVal) {
        if (this.tail.val == nodeVal) {
            this.pop()
        } else if (this.head.val == nodeVal) {
            this.shift()
        } else {
            let iterator = this.tail
            for (let i = this.length; i > 0; i--) {
                if (iterator.val == nodeVal) {
                    iterator = new Node(iterator.prev, iterator.next.val, iterator.next)
                    this.length--;
                }
                iterator = iterator.prev
            }
        }
    }
}

