//Rest Operator (...)
//==> Rest operator take the rest of values
// if rest ot value is the collection of values then [] is used to take that data
// if rest ot value is the collection of values then [] is used to take that data
// if rest ot value is the collection of key value pair then {} is used to take that data

let fun = (a, ...b) => {
  console.log(a);
  console.log(b);
};
fun(1, 2, 3, 4, 5);
