// QN. "my name is anjan"=> "My Name Is Anjan"

let firstLetterCapital = (input) => {
  let inputArr = input.split("");
  let outputArr = inputArr.map((value, i) => {
    if (i === 0) {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  });

  let output = outputArr.join("");
  return output;
};

let eachWordCapital = (input) => {
  let inputArr = input.split(" ");
  let inputArr1 = inputArr.map((value, i) => {
    return firstLetterCapital(value);
  });
  let output = inputArr1.join(" ");
  return output;
};
console.log(eachWordCapital("Hello my name is anjan"));
