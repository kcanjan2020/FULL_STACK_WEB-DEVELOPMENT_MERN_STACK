let ar1=[-5,-4,-3,-2,0,1,2,3,4,5,6]

let ar2=ar1.filter((value,i)=>{
    if(value>0)
    {
        return true
    }
    else{
        return false
    }
})
console.log(ar2)


//Filter string ["a",1,"b",3]=>["a","b"]

let array=["a",1,"b",3]
let array1=array.filter((value,i)=>{
    if(value==="a" || value==="b")
    {
        return true
    }
    else{
        return false
    }
})
console.log(array1)

//filter string ["nitan","ram,"hari"]=>["notan",hari] filter those string whose length is greater than or equal to 4
 let filterString=["nitan","ram","hari"]
 let _filterString=filterString.filter((value,i)=>{
    if(value.length>=4)
    {
        return true
    }
    else 
    {
        return false
    }
 })
 console.log(_filterString)


 //Return true Value from  [1,false, 0, undefined, "", ram]
 let trueValue=[1,false, 0, undefined, "", "ram"]
 let _trueValue=trueValue.filter((value,i)=>{
    if(value)
    {
        return true
    }
    else{
        return false
    }
 })
 console.log(_trueValue)
//    or 

let trueValue1=[1,false, 0, undefined, "", "ram","Anjan"]
 let _trueValue1=trueValue1.filter(Boolean)
 console.log(_trueValue1)