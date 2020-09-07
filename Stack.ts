class Stack {
    private items: Array<any>
    public constructor() {
        this.items = []
    }

    public get size() {
        return this.items.length
    }

    public get peek() {
        return this.items[this.size - 1]
    }

    public push(item: any) {
        this.items.push(item)
    }

    public pop() {
        return this.items.pop()
    }

    public clear() {
        this.items = []
    }

    public print() {
        console.log(this.items.toString())
    }
}