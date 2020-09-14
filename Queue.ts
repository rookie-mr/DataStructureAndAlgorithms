/**
 * 队列：队列是遵循FIFO（First In First Out，先进先出，也称为先来先服务）原则的一组有序的项。
 */
class Queue {
    items: Array<any>
    constructor(items: Array<any>) {
        this.items = items || []
    }

    get size() {
        return this.items.length
    }

    get front() {
        return this.items[0]
    }

    enqueue(item: any) {
        this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    clear() {
        this.items = []
    }

    print() {
        console.log(this.items.toString())
    }
}

export default Queue