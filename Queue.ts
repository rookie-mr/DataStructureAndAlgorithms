class Queue {
    private items: Array<any>
    public constructor(items: Array<any>) {
        this.items = items || []
    }

    public get size() {
        return this.items.length
    }

    public get front() {
        return this.items[0]
    }

    public enqueue(item: any) {
        this.items.push(item)
    }

    public dequeue() {
        return this.items.shift()
    }

    public clear() {
        this.items = []
    }

    public print() {
        console.log(this.items.toString())
    }
}