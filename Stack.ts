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
/*
形如 1+2*3-4/5 计算其输出
*/

function counter(s) {
    const numberStack = new Array()
    const operatorStack = new Array()
    const higherPriority = ['*', '/']
    let temp = ''
    let status = 0 // 入栈状态
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i])) {
            temp += s[i]
        } else {
            numberStack.push(temp)
            temp = ''
            // 判断是否为待清除状态
            if (status === 1) {
                const l = operatorStack.length
                let s = ''
                for (let i = 0; i < l; i++) {
                    s += numberStack.pop() + operatorStack.pop() + numberStack.pop()
                    numberStack.push(eval(s))
                }
                status = 0
            }

            if (higherPriority.indexOf(s[i]) != -1) {
                status = 1 // 待清除状态
            }
            operatorStack.push(s[i])
        }
    }
    const l = operatorStack.length
    let res = ''
    for (let i = 0; i < l; i++) {
        res += numberStack.pop() + operatorStack.pop() + numberStack.pop()
        numberStack.push(eval(s))
    }
    return numberStack.pop()
}
