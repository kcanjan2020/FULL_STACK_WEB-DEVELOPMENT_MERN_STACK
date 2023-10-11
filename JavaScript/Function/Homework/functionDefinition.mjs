/* a) make a arrow function name is18 pass a value ,the function must
 return true if the given age is 18 otherwise return false */

export let is18=(age)=>{
    if(age===18)
    {
        return true
    }
    else 
    {
        return false
    }
}


/*b) make a arrow function named isGreaterThan18 , pass a value , the function 
must return true if the given age is greater or equals to 18 otherwise false */

export let isGreaterThan18=(age)=>{
    if(age>=18)
    {
        return true
    }
    else 
    {
        return false
    }
}


/* c) make a arrow function that take a number and return you can enter room 
only if the enter number is less than 18 else you can not enter */

export let room =(roomNO)=>{
    if(roomNO<18)
    {
        return("You Can Enter in Room")
    }
    else{
        return("You can not Enter in Room")
    }
} 


/* d) make a arrow function named isEven , pass a value, that return true 
if the given number is even else return false */

export let isEven=(num)=>{
    if(num%2===0)
    {
        return true
    }
    else 
    {
        return false
    }
}


/*e) make a arrow function that takes 3 input as number and return 
average of given number */

export let avg=(num1,num2, num3)=>{
    let sum=num1+num2+num3
    let _avg=sum/3
    return(_avg)
}



/* f) make a arrow function that takes one input as number and return"category1"
for number range from 1 to10, 
return "category2" for number range from 11 to 20,
return "category3" for number range form 21 to 30 */

export let category=(num)=>{
    if(num>=1 && num<=10)
    {
        return("category1")
    }
    else if(num>=11 && num<=20)
    {
        return("category2")
    }
    else if(num>=21 && num<=30)
    {
        return("category3")
    }
    else{
        return("Given number is out of Range")
    }

}


/*g) make a arrow function that takes a input as number  that perform
if age [upto 17],  return your ticket is free
if age[18 to 25 ], return  your ticket cost 100
if age[>26],  return your ticket cost 200
if age===26 return your ticket is 150 */

export let ticket=(age)=>{
    if(age>=1 && age<=17)
    {
        return("Your Ticket is Free")
    }
    else if(age>=18 && age<=25)
    {
        return("Your Ticket Cost is 100")
    }
    else if(age>26)
    {
        return("Your Ticket Cost is 200")
    }
    else if(age===26)
    {
        return("Your Ticket Cost is 150")
    }
    else{
     return("Invalid age")
    }
    
}


/* h)  make a function that take a number
if number>=3 console i am greater or equal to 3
if number ===3 console i am 3
if number<3 console i am less than3
else show i am other */


 export let check=(number)=>{
    if(number===3)
    {
        console.log("i am 3")
    }
    else if(number>=3){
        console.log("i am greater or equal to 3")
    }
    else if(number<3)
    {
        console.log("i am less than 3")
    }
    else
    {
        console.log("I am other")
    }
 }

/* i) make a function that takes input as number and return output You can watch
 movies if input is greater or equal to 18 else return "You are not authorized
  to watch movies */

  export let moviesAuthentication=(num)=>{
    if(num>=18)
    {
        return("You can watch movies")
    }
    else {
        return("You are not authorized to watch movies")
    }

  }
