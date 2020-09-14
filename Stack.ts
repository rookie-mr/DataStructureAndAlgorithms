/**
 * 栈（堆栈）：栈是一种遵从后进先出（LIFO）原则的有序集合。
 */
class Stack {
    private items: Array<any>
    constructor() {
        this.items = []
    }

    get size() {
        return this.items.length
    }

    get peek() {
        return this.items[this.size - 1]
    }

    push(item: any) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    clear() {
        this.items = []
    }

    print() {
        console.log(this.items.toString())
    }
}