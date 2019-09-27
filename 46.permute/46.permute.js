/**
 * @param {外部传入的数组} nums
 * @param {最后返回出的二维数组} matrix
 * @param {用于排序的函数表达式} subfunc
 * @param {初始传递的是nums数组，后来是内部新建的拼接数组1} subfunc -> arr
 * @param {初始为空数组，后来是内部新建的拼接数组2，或称为临时数组} subfunc -> temp
 * @return {number[][]}
 */
var permute = function(nums) {
    // 定义一个新数组用于储存数组的数组
    let matrix = [];
    //定义一个将会重复调用到的排序用的函数表达式，传入两个参数，第一个是外部数组，第二个是空数组
    const subfunc = (arr, temp) => {
        //外部数组为空则返回空数组
      if (arr.length === 0) {
        matrix.push(temp)
      }
      //排序
      for (let i = 0, len = arr.length; i < len; i++) {
          //定义一个新数组，选中arr数组的第0~i 个元素，与arr数组第i+1个元素拼接生成新数组赋值给新数组newarr
        let newarr = arr.slice(0, i).concat(arr.slice(i + 1))
        //递归调用本函数，传入新数组与临时数组
        subfunc(newarr, temp.concat(arr[i]))
      }
    }
    subfunc(nums, [])
    return matrix;
}

permute([1,2,3]);