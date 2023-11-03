
try {
    console.log("Hello i am try");
    let error=new Error("You can Enter Invalid Email Address");
    throw error
 //if the error is occurred then it goes to the try block 
  //if the error is not occurred then it does not goes to the try block 

    console.log("This is not executed")
    
} catch (error) {
    console.log("Error Encountered");
}