/**
 * @author: Bill
 * @method: 
 * @param {*}
 * @Date: 2021-06-03 09:40:15
 * @Description: 剑指 Offer 06. 从尾到头打印链表
 * @return {*}
 */
var reversePrint = function (head) {
  let nums = [],
    node = head
  while (node) {
    nums.unshift(node.val)
    node = node.next
  }
  return nums
};

module.exports = reversePrint