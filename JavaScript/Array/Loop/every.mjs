let arr1=[1,2,3,4,5]
let is=arr1.every((value,i)=>{
    if(value>0)
    {
        return true
    }
    else{
        return false
    }
})
console.log(is)