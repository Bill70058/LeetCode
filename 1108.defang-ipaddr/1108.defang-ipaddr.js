/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  //将字符串推入数组再替换，最后再从数组转为字符串
  var arr = [];
  var newAddress = '';
  for(let i in address){
    arr.push(address[i]);
  }
  for(let i in arr){
    if(arr[i] == '.'){
      arr[i] = '[.]';
    }
    newAddress += arr[i];
  }
  return newAddress;
};

module.exports = defangIPaddr;
