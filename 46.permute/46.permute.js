/**
 * @param {Array} nums - 外部传入的数组
 * @param {Array} matrix - 最后返回出的二维数组
 * @return {number[][]}
 */
var permute = function(nums) {
    // 定义一个数组，用于储存数组，称呼他为大数组
    let matrix = [];
    
    /**
     * @function - 用于递归调用排序
     * @param {Array} arr - 初始传递的是nums数组，后来是内部新建的拼接数组1
     * @param {Array} temp - 初始为空数组，后来是内部新建的拼接数组2，或称为临时数组
     */
    const subfunc = (arr, temp) => {
        //形参数组为空则将临时数组推入外部的大数组
      if (arr.length === 0) {
        matrix.push(temp);
      }
      //排序
      for (let i = 0, len = arr.length; i < len; i++) {

        //创建一个新数组为了传入递归调用,注意slice 方法返回的数组值与concat方法返回的数组值
        let newarr = arr.slice(0, i).concat(arr.slice(i + 1));

        //递归调用本函数，传入新数组与临时数组。
        //注意，每一次递归都是进入更深一层 f() -> f(f()) -> f(f(f()))，循环条件不满足时，结束的只是最内层的递归
        subfunc(newarr, temp.concat(arr[i]));
      }
    }
    subfunc(nums, [])
    return matrix;
}

// permute([1,2,3]);
module.exports = permute;