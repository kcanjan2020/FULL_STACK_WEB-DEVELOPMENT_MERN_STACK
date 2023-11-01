let inputArr=["a","b","c","d","e"]
//index        0   1   2   3   4
inputArr.splice(1,2,"Ram","Hari","Shyam",true)
//1 is starting  index
//2 no of element to delete
// Ram ,Hari, Shyam, true are the value to be added from starting index
console.log(inputArr)

//let outputArr=inputArr.splice(1,2,"Ram","Hari","Shyam",true) // it returns the deleted items
// console.log(outputArr)

let outputArr=inputArr.splice(1,) // if no of item to deleted is missing then it wil remove all item to the end
console.log(outputArr)
