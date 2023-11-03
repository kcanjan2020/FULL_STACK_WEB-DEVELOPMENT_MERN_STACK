let obj = { name: "Anjan", age: 25 };
let info = { idMarried: true };
let obj2 = { ...obj };
console.log(obj2);
let obj3 = { ...obj, ...info };
console.log(obj3);

let obj4 = { age: 30, location: "Rukum", ...obj, ...info };
console.log(obj4);
