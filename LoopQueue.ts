/**
 * 循环队列——出队时时间复杂度O(1)
 */
import Queue from "./Queue"

class LoopQueue extends Queue {
    constructor(items: Array<any>) {
        super(items)
    }

    findIndex(index) {
        const length = this.size
        return (index > length) ? (index % length) : index
    }

    find(index) {
        return this.size === 0 ? null : this.items[this.findIndex(index)]
    }
}