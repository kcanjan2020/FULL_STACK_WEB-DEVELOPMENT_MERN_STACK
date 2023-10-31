//Object
//Array is made by the combination of values
//object is made by the combination of key value pair

let obj={
    name:"Anjan",
    //name=> key
    //Anjan=> value
    //name:"Anjan"=> property
    age:25,
    isMarried:false
}
//get whole object
console.log(obj)

// get specific elements of object
console.log(obj.name)
console.log(obj.age)
console.log(obj.isMarried)

//change specific elements of object 
obj.name="Ram"
console.log(obj)

//delete specific elements of object 
delete obj.age
console.log(obj)