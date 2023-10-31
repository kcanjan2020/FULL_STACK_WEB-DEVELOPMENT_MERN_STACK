// duplicate key does not exist
// latest code overwrite old code
let obj={
    name:"Anjan",
    age:25,
    name:"Ram"
}
console.log(obj) // {name:"Ram", age:29}
obj.age=30
console.log(obj) // {name:"Ram", age:30}