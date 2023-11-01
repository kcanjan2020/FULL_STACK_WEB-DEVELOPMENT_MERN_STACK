let arr1 = [1, 2, 3, 4, 5];
//                      10 ,5
let value = arr1.reduce((pre, cur) => {
  return pre + cur;
}, 0); // 1/3/6/10/15
console.log("Sum=", value);

// find the product of all element using reduce

let arr = [1, 2, 3, 4, 5];
let product = arr.reduce((pre, cur) => {
  return pre * cur;
}, 1);

console.log("Product=", product);
