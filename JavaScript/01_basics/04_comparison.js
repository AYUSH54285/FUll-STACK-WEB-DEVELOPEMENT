// console.log("2">1); // here js automaticaly converts String into Number
// console.log("02">1);

// console.log(null>0); // false
// console.log(null==0);  // false
// console.log(null>=0);    // true =>    the reasons is that an equality check == and comparison operator < > <= >= works differently
//                          //  comparions convert null to a number , treating it as 0 
//                          // that's why (3) null >= 0 and (1) null>0 is false

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined < 0);

// === => strict check (check value with datatypes)
console.log("2"===2);