let fun=(a,b,c,d,e)=>{
 console.log(c)
 console.log(d)
 console.log(e)
}

fun(1,2,true,["Anjan","Ram"],{name:"Hari",age:45})


// Using Destructure

let fun2=(a,b,c,[name1,name2],{name,age})=>{
    console.log(c)
    console.log(name1)
    console.log(name2)
    console.log(name)
    console.log(age)
   }
   
   fun(1,2,true,["Anjan","Ram"],{name:"Hari",age:45})