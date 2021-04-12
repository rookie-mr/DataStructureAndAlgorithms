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

// 表达式求值
/**
 * 形如 1+2+3*4/5-6 计算其输出
 */

function counter(s) {
    const numberStack = new Stack()
    const operatorStack = new Stack()
    const higherPriority = ['*', '/']
    let temp = ''
    let status = 0 // 入栈状态
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i])) {
            temp += s[i]
        } else {
            numberStack.push(temp)
            temp = ''
            // 判断是否为待出栈状态
            if (status === 1) {
                const l = operatorStack.size
                let s = ''
                for (let i = 0; i < l; i++) {
                    s += numberStack.pop() + operatorStack.pop() + numberStack.pop()
                    numberStack.push(eval(s))
                }
                status = 0
            }

            if (higherPriority.indexOf(s[i]) != -1) {
                status = 1 // 待出栈状态
            }
            operatorStack.push(s[i])
        }
    }
    const l = operatorStack.size
    let res = ''
    for (let i = 0; i < l; i++) {
        res += numberStack.pop() + operatorStack.pop() + numberStack.pop()
        numberStack.push(eval(s))
    }
    return numberStack.pop()
}

// 符号匹配问题

/**
 * 判断一个字符串中的括号是否匹配 
 */

function invalid(s) {
    const leftSigns = ['{', '[', '(']
    const rightSigns = ['}', ']', ')']
    const stack = new Stack()
    let res = true
    let errorIndex = 0
    function isMatch(l, r) {
        if (leftSigns.indexOf(l) === rightSigns.indexOf(r)) {
            return true
        } else {
            return false
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (leftSigns.includes(s[i])) {
            stack.push(s[i])
        }
        if (rightSigns.includes(s[i])) {
            if (!isMatch(stack.pop(), s[i])) {
                errorIndex = i
                res = false
                break 
            }
        }
    }
    if (stack.size > 0) {
        console.log(`左侧${stack.size}个符号没有被完全匹配！`)
        return false
    }
    if (res) {
        console.log(`字符串合法!`)
    } else {
        console.log(`位置${errorIndex}处发现错误！`)
    }
    return res
}
