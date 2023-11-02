/* Q.N find sum of all product
let products =[
    {name:"earphone", price:1000},
    {name:"battery",price:2000},
    {name:"charger",price:500}
    ] 
    */

let products = [
  { name: "earphone", price: 1000 },
  { name: "battery", price: 2000 },
  { name: "charger", price: 500 },
];

let productSum=products.reduce((pre,cur)=>{
    return pre+cur.price;
},0)

console.log(productSum)

//[earphone, battery, charger]
let productName=products.map((value,i)=>{
    return value.name

})
console.log(productName)

//[1000, 2000,500]
let priceProduct=products.map((value,i)=>{
    return value.price


})
console.log(priceProduct)

//price greater than 700   [ 1000, 2000]
let productsG700=products.filter((value,i)=>{
    if(value.price>700)
    {
        return true;
    }
    else 
    {
        return false;
    }

});


let desiredOutput=productsG700.map((value,i)=>{
    return value.name;
});
console.log(desiredOutput)

let desiredOutput2=productsG700.map((value,i)=>{
    return value.price;
});
console.log(desiredOutput2)