import { avg, category, check, is18, isEven, isGreaterThan18, moviesAuthentication, room, ticket } from "./functionDefinition.mjs";

// call is18 Function
let age=is18(20)
console.log(age)


// call==> isGreaterThan18 Function
let _age=isGreaterThan18(18)
console.log(_age)


// call==> room  Function 
let message=room(1)
console.log(message)


// call==> isEven Function
let _num=isEven(10)
console.log(_num)


//call==> avg Function
let average=avg(4,5,6)
console.log("Average=",average)


// call category Function

let _category=category(90)
console.log(_category)


//call==> Ticket Function
let costMessage=ticket(26)
console.log(costMessage)


//call==> check function
check(3)

// call moviesAuthentication function
let authMessage=moviesAuthentication(17)
console.log(authMessage)