/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.item = [];         //对象为数组对象
    this.min = Infinity;    //最小值属性的值为科学最小值
    return this;             //将自身返回
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.item.push(x);                   //原型为数组方法的push()方法
    this.min = Math.min(this.min, x);    //推入一个数的同时调用min()方法对比这个数是否是比科学最小值小
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if(!this.item.length)               //如果想要删除的栈长度已经小于等于0了就返回0，不再进行删除操作
    return 0;                            
    let s = this.item.pop();             //pop() 方法的原型为数组 pop() 方法，删除完栈的最后一个数后将返回值赋予临时变量 s
    if(this.min === s)                  //如果删除的数是最小值
    this.min = Math.min(...this.item);   //调用min() 方法对栈内的数值从新进行排序，得到的最小值赋予属性 min
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    let len = this.item.length ;         //获取栈的长度
    if (!len)                           //如果栈的长度为非true（<=0;undefind;null...)等情况，返回0
        return 0;
    return this.item[len-1];             //否则返回栈的长度 -1 的下标值
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min ;                //返回属性 min 的值
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// MinStack min;
minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> 返回 -3.
minStack.pop();
console.log(minStack.top());      //--> 返回 0.
console.log(minStack.getMin());   //--> 返回 -2.
