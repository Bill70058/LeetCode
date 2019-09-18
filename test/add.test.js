import functions  from './add';

test('sum(2 + 2) 等于 4', () => {
  expect(functions.sum(2, 2)).toBe(4);
});

test('sum(2+2) 不等于5',()=>{
    expect(functions.sum(2,2)).not.toBe(5);
});

test('getAuthor()返回的对象深度相等', () => {
    expect(functions.getAuthor()).toEqual(functions.getAuthor());
});

test('getAuthor()返回的对象内存地址不同', () => {
    expect(functions.getAuthor()).not.toBe(functions.getAuthor());
})