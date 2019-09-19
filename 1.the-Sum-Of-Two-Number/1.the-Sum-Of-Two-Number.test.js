import twosum from './1.the-Sum-Of-Two-Number'


test('[3,2,4],5 return [0,1]',()=>{
    expect(twosum([3,2,4],5)).toEqual([0,1]);
});
test('[3,3,4],5 return [0,1]',()=>{
    expect(twosum([3,2,4],5)).toEqual([0,1]);
});
