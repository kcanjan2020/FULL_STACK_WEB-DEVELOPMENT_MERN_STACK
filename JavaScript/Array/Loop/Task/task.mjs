let age=[1,2,20,30,40]
let ageOut=age.every((value,i)=>{
    if(age>17)
    {
        return true 
    }
    else{
        return false
    }
})
console.log(ageOut)


let arr1=[2,4,9,6]
let arr2=arr1.every((value,i)=>{
    if(value%2==0){
        return true
    }
    else{
        return false
    }
})
console.log(arr2)



let smoking=["smoking","drinking","biting nails"]
let _smoking=smoking.some((value,i)=>{
    if(value==="smoking")
    {
        return true
    }
    else{
        return false
    }
})
console.log(_smoking)


let string1=" Bearer nails"
let array=string1.split(" ")
console.log(array)
let array1=array.some((value)=>{
    if(value==="Bearer")
    {
        return true
    }
    else
    {
        return false
    }
})
console.log(array1)



//tailWin ==> alternative ot Css
//Ant Design=> alternative of Bootstraps