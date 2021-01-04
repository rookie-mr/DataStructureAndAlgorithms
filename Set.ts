class Set {
  items: any
  constructor() {
    this.items = {}
  }

  has(value) {
    return this.items.hasOwnProperty(value)
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value
      return true
    }
    return false
  }

  remove(value) {
    if (this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }

  get size() {
    return Object.keys(this.items).length
  }

  get values() {
    return Object.keys(this.items)
  }

  union(otherSet) { // 并集
    const unionSet = new Set()
    this.values.forEach((v, i) => unionSet.add(this.values[i]))
    otherSet.values.forEach((v, i) => unionSet.add(otherSet.values[i]))
    return unionSet
  }

  intersection(otherSet) { // 交集
    const intersectionSet = new Set()
    this.values.forEach((v, i) => {
      if (otherSet.has(v)) {
        intersectionSet.add(v)
      }
    })
    return intersectionSet
  }

  difference(otherSet) { // 差集
    const differenceSet = new Set()
    this.values.forEach((v, i) => {
      if (!otherSet.has(v)) {
        differenceSet.add(v)
      }
    })
    return differenceSet
  }

  subset(otherSet) { // 子集
    if (this.size > otherSet.size) {
      return false
    } else {
      return !this.values.some(v => !otherSet.has(v))
    }
  }
}