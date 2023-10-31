let str='abc'
let ar=str.split("")
console.log(ar)
let reverseArray=ar.reverse()
console.log(reverseArray)

let reverseString=reverseArray.join("")
console.log(reverseString)

//or
let reverseString1=str.split("").reverse().join("")
console.log(reverseString1)


// [" my name is"]=> [is name my]
let str1="my name is"
let revString=str1.split(" ").reverse().join(" ")
console.log(revString)