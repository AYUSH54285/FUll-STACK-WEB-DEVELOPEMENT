// temporal for date promoted by javascript

let myDate = new Date()
console.log(myDate);

//for good redability we use toString
console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2024, 0, 6, 7,42 )  // month starting from 0 in javascript
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myNewDate = new Date("01-06-2024")
console.log(myNewDate.toDateString()); 
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp); // total time in milisecond from 1970 year
console.log(myCreatedDate.getTime());  // between the time given  and 1970

console.log(Math.floor(Date.now()/1000)) // b/w present and 1970    and we divide by 1000 for getting in second

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('Default',{
    weekday:"long"    
})