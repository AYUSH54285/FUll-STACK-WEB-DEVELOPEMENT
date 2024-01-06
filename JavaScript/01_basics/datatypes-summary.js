// primitive datatypes
// 7 types : String,Number,Boolean,null,undefined,Symbol(unique),BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null 
let userEmail; // it is undefined datatype whether it is initiallised by undefined or not


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);  // it returns false because of Symbol datatype which makes both variable is unique


//Reference or Non Primitive
// Array,Objects,functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name : "ayush",
    age:22,
}

const myFunction = function(){
    console.log("hello ayush");
}

console.log(typeof null);  // typeof null is Object datatype

console.log(typeof myFunction); // it's datatype is "function object" 

// stack(primitive) , Heap(non-primitive)
 let value = 12;




//  --------------------------------------------------------------------------------------------

let myTYoutubeName = "hiteshchoudlahrydotcom"
let anotherName = myTYoutubeName

console.log(myTYoutubeName)
console.log(anotherName)

anotherName = "chaiaurcode"
console.log(anotherName) // it ewill print chaiaurCode because it copied the value



// non primitve datatype
//object
let userOne ={
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "a@gmail.com"

console.log(userOne);
console.log(userTwo); // it will change userOne also because it is using refernece not copy