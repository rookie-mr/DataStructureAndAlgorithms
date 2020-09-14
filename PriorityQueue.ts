/**
 * 优先队列
 */
import Queue from './Queue'

class PriorityQueue extends Queue {
    constructor(items) {
        super(items)
    }

    enqueue(element, priority) { // 入队前根据优先级确认入队位置
        const cur = { element, priority }
        if (this.size === 0) {
            this.items.push(cur)
        } else {
            const index = this.items.findIndex(o => { return o.priority < cur.priority })
            index === -1 ? this.items.push(cur) : this.items.splice(index, 0, cur)
        }
    }
}