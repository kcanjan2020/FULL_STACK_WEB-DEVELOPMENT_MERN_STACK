//get one even number 
let arr1=[1,2,3,4]
let arr2=arr1.find((value,i)=>{
    if(value%2===0)
    {
        return true
    }
    else{
        return false
    }
})
console.log(arr2)