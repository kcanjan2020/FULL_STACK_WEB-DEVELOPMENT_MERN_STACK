let arr1=[1,2,3,4,5]
let hasEven=arr1.some((value,i)=>{
    if(value%2===0)
    {
        return true
    }
    else{
        return false
    }
})
console.log(hasEven)