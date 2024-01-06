const score = 200
// console.log(score);

const balance = new Number(200);  // here we use new keyword with the datatype which specificaly define its datatypes 
// console.log(balance);

// console.log(balance.toString().length); // now it is string datatypes

// console.log(balance.toFixed(1));


const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(4))

const hundreds =100000
// console.log(hundreds.toLocaleString('en-IN')); // IN is used for indian stadards in number system



console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.min(4,3,7,8));
console.log(Math.max(4,3,7,8));
console.log(Math.random());  //  it always give value between 0 and 1
console.log(Math.random()*10);   // for getting the value between 0 and 10
console.log((Math.random()*10) + 1); // for getting the value between 0 and 10 but not in between 0 and 1


const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max-min+1)) + min);  //now we getting the number between 10 and 20 