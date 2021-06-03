/*
 * @Author: your name
 * @Date: 2021-06-03 17:26:04
 * @LastEditTime: 2021-06-03 17:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/10-I.fib/index.test.js
 */
const fib = require('./index.js')

describe('fib', () => {
  test('fibnacci', () => {
    expect(fib(5)).toEqual(5)
    expect(fib(81)).toEqual(107920472)
    expect(fib(2)).toEqual(1)
  })
})