let ar1=[1,2,3,4,5,6]

let ar2=ar1.filter((value,i)=>{
    if(value%2===0)
    {
        return true
    }
    else{
        return false
    }
})
console.log(ar2)
