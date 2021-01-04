// 链表节点
class Node {
  element: any
  prev: Node | null
  next: Node | null
  constructor(element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

// 双向链表
class DoublyLinkedList {
  head: any
  tail: Node
  length: number
  element: any
  prev: Node | null
  next: Node | null

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // 任意位置插入元素
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0
      // 首位
      if (position === 0) {
        if (!head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          this.head = node
          current.prev = node
        }
        // 末位
      } else if (position === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
        // 中位
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }
      this.length++
      return true
    }
    return false
  }

  // 移除指定位置元素
  removeAt(position) {
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0

      // 首位
      if (position === 0) {
        this.head = this.head.next
        this.head.prev = null
        if (this.length === 1) {
          this.tail = null
        }

        // 末位
      } else if (position === this.length - 1) {
        this.tail = this.tail.prev
        this.tail.next = null

        // 中位
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
      }
      this.length--
      return current.element
    } else {
      return null
    }
  }

  // 其他方法...
}