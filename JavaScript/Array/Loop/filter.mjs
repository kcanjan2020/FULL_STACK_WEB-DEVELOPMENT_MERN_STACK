let ar1=[1,2,3,4,5,6]

let ar2=ar1.filter((value,i)=>{
    return true
})
console.log(ar2)


let ar3=ar1.filter((value,i)=>{
    return false
})
console.log(ar3)