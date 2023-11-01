let arr=["a","b","c","d","e"]
 ///index 0   1   2   3   4  ==> index of last elements is always grater than 1
 let arr2=arr.slice(1,4) // 1 is the starting index and 5 is the end index (end index must be always grater than 1)
 console.log(arr2)
 
 // if the last index is missing slice method will slice to end
 let arr3=arr.slice(2)
 console.log(arr3)