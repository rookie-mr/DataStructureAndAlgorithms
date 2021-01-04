class _Node {
  key: any
  left: any
  right: any
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree { // BST 二叉搜索树
  root: any
  constructor() {
    this.root = null
  }

  insert(key) {
    const newNode = new _Node(key)
    const insertNode = (node, newNode) => {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  inOrderTraverse(callback) { // 中序遍历
    const inOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    }
    inOrderTraverseNode(this.root, callback)
  }

  preOrderTraverse(callback) { // 先序遍历
    const preOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }
    preOrderTraverseNode(this.root, callback)
  }

  postOrderTraverse(callback) { // 后序遍历
    const postOrderTraverseNode = (node, callback) => {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }
    postOrderTraverseNode(this.root, callback)
  }

  min(node) {
    const minNode = node => {
      return node ? (node.left ? minNode(node.left) : node) : null
    }
    return minNode(node || this.root)
  }

  max(node) {
    const maxNode = node => {
      return node ? (node.right ? maxNode(node.right) : node) : null
    }
    return maxNode(node || this.root)
  }

  search(key) {
    const searchNode = (node, key) => {
      if (node === null) return false
      if (node.key === key) return node
      return searchNode((key < node.key) ? node.left : node.right, key)
    }
    return searchNode(this.root, key)
  }

  remove(key) {
    const removeNode = (node, key) => {
      if (node === null) return false
      if (node.key === key) {
        if (node.left === null && node.right === null) {
          let _node = node
          node = null
          return _node
        } else {
          console.log('key', key)
        }
      } else if (node.left !== null && node.key > key) {
        if (node.left.key === key) {
          node.left.key = this.min(node.left.right).key
          removeNode(node.left.right, node.left.key)
          return node.left
        } else {
          return removeNode(node.left, key)
        }
      } else if (node.right !== null && node.key < key) {
        if (node.right.key === key) {
          node.right.key = this.min(node.right.right).key
          removeNode(node.right.right, node.right.key)
          return node.right
        } else {
          return removeNode(node.right, key)
        }
      } else {
        return false
      }
      return removeNode((key < node.key) ? node.left : node.right, key)
    }
    return removeNode(this.root, key)
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.inOrderTraverse(value => { console.log(value) })

// AVL树： AVL树是一种自平衡二叉搜索树，AVL树本质上是带了平衡功能的二叉查找树（二叉排序树，二叉搜索树），
// 在AVL树中任何节点的两个子树的高度最大差别为一，也就是说这种树会在添加或移除节点时尽量试着成为一棵完全树，所以它也被称为高度平衡树。
// 查找、插入和删除在平均和最坏情况下都是 O（log n），增加和删除可能需要通过一次或多次树旋转来重新平衡这个树。 
// 红黑树： 红黑树和AVL树类似，都是在进行插入和删除操作时通过特定操作保持二叉查找树的平衡，从而获得较高的查找性能；
// 它虽然是复杂的，但它的最坏情况运行时间也是非常良好的，并且在实践中是高效的：它可以在O(log n)时间内做查找，插入和删除，这里的 n 是树中元素的数目。 
// 红黑树是每个节点都带有颜色属性的二叉查找树，颜色或红色或黑色。在二叉查找树强制一般要求以外，对于任何有效的红黑树我们增加了如下的额外要求：
// 节点是红色或黑色
// 根节点是黑色
// 每个叶节点（NIL节点，空节点）是黑色的
// 每个红色节点的两个子节点都是黑色。(从每个叶子到根的所有路径上不能有两个连续的红色节点)
// 从任一节点到其每个叶子的所有路径都包含相同数目的黑色节点
// 这些约束强制了红黑树的关键性质：从根到叶子的最长的可能路径不多于最短的可能路径的两倍长。
// 结果是这个树大致上是平衡的。因为操作比如插入、删除和查找某个值的最坏情况时间都要求与树的高度成比例，这个在高度上的理论上限允许红黑树在最坏情况下都是高效的，
// 而不同于普通的二叉查找树。 红黑树和AVL树一样都对插入时间、删除时间和查找时间提供了最好可能的最坏情况担保。这不只是使它们在时间敏感的应用如即时应用(real time 
// application)中有价值，而且使它们有在提供最坏情况担保的其他数据结构中作为建造板块的价值；
// 例如，在计算几何中使用的很多数据结构都可以基于红黑树。 红黑树在函数式编程中也特别有用，在这里它们是最常用的持久数据结构之一，它们用来构造关联数组和集合，在
// 突变之后它们能保持为以前的版本。除了O(log n)的时间之外，红黑树的持久版本对每次插入或删除需要O(log n)的空间。