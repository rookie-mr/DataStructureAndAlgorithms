import LinkedList from './LinkedList'
class HashTable {
  table: any
  constructor() {
    this.table = []
  }

  // 散列函数
  static loseloseHashCode(key) {
    let hash = 0
    for (let codePoint of key) {
      hash += codePoint.charCodeAt()
    }
    return hash % 37
  }

  static djb2HashCode(key) { // 更好避免Hash冲突
    let hash = 5381
    for (let codePoint of key) {
      hash = hash * 33 + codePoint.charCodeAt()
    }
    return hash % 1013
  }

  // 分离链表形式

  put(key, value) {
    const position = HashTable.loseloseHashCode(key)
    if (this.table[position] === undefined) {
      this.table[position] = new LinkedList()
    }
    this.table[position].append({ key, value })
  }

  get(key) {
    const position = HashTable.loseloseHashCode(key)
    if (this.table[position] === undefined) return undefined
    const getElementValue = node => {
      if (!node && !node.element) return undefined
      if (Object.is(node.element.key, key)) {
        return node.element.value
      } else {
        return getElementValue(node.next)
      }
    }
    return getElementValue(this.table[position].head)
  }

  remove(key) {
    const position = HashTable.loseloseHashCode(key)
    if (this.table[position] === undefined) return undefined
    const getElementValue = node => {
      if (!node && !node.element) return false
      if (Object.is(node.element.key, key)) {
        this.table[position].remove(node.element)
        if (this.table[position].isEmpty) {
          this.table[position] = undefined
        }
        return true
      } else {
        return getElementValue(node.next)
      }
    }
    return getElementValue(this.table[position].head)
  }

  // 线性探查方式

  /*put(key, value) {
    const position = HashTable.loseloseHashCode(key)
    if (this.table[position] === undefined) {
      this.table[position] = { key, value }
    } else {
      let index = ++position
      while (this.table[index] !== undefined) {
        index++
      }
      this.table[index] = { key, value }
    }
    this.table[position].append({ key, value })
  }

  get(key) {
    const position = HashTable.loseloseHashCode(key)
    const getElementValue = index => {
      if (this.table[index] === undefined) return undefined
      if (Object.is(this.table[index].key, key)) {
        return this.table[index].value
      } else {
        return getElementValue(index + 1)
      }
    }
    return getElementValue(position)
  }

  remove(key) {
    const position = HashTable.loseloseHashCode(key)
    const removeElementValue = index => {
      if (this.table[index] === undefined) return false
      if (Object.is(this.table[index].key, key)) {
        this.table[index] = undefined
        return true
      } else {
        return removeElementValue(index + 1)
      }
    }
    return removeElementValue(position)
  }*/
}