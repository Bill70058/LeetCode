/**
 * @author: Bill
 * @method: 
 * @param {*}
 * @Date: 2021-06-03 11:49:20
 * @Description: 剑指 Offer 09. 用两个栈实现队列
 * @return {*}
 */

var CQueue = function () {
  this.stackA = []
  this.stackB = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stackB.length) {
    return this.stackB.pop()
  }
  // 因为是根据栈先进后出，此时b队列内部无数据，所以把a的数据全部倒序插入b队列
  // 全部插进b队列是为了只需要判断b队列的长度就可以分析出此时a、b队列是否有数据，并且之后也只要操作b队列
  while (this.stackA.length) {
    this.stackB.push(this.stackA.pop())
  }
  if (this.stackB.length) {
    return this.stackB.pop()
  }
  return -1
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */