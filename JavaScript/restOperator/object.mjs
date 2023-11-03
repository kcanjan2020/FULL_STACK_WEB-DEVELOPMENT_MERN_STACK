let { age, location, ...info } = {
  name: "Anjan",
  age: 25,
  isMarried: true,
  location: "Rukum",
};

console.log(info); // output:{ name: 'Anjan', isMarried: true }
