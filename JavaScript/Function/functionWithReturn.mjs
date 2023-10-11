// Function without return ==> call without storing in variable
// Function with return ==> call with storing in variable
let sum=function()
{
    console.log("Hello")
    return 3
    console.log("I am Function")  // It can not be execute==> All code written before return
}
console.log("I am main Program")
let s=sum()
console.log(s)