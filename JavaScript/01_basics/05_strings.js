// string can be shown by single and double quotes
const name =  "ayush"
const repo = 50
console.log(name , repo ); // , use for space  

// modern approch to add string
// Using template literals for string interpolation
console.log(`my name is ${name.toUpperCase()} and i have ${repo} repos`);   // To convert a string to uppercase in JavaScript, you can use the toUpperCase() method. If you're using a template literal ${string}, you can perform the conversion like this:


const gameName = new String('hiteshhc') // here String is a object datatype and string is a constructor name 

console.log(typeof(gameName));

console.log(gameName[0]);

// we can also use prototypes methods

console.log(gameName.__proto__.toUpperCase());   // it shows {} because the prototype of the String object is an empty object. This means that the String object doesn't have additional properties or methods in its prototype. The {} indicates an empty prototype object.

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,4);  // we can't use negaitve values in substring
console.log(newString)

const anotherString = gameName.slice(-8,4) // we can use negative values in slice 
console.log(anotherString)

const newString1 = "      hitesh  "
console.log(newString1);
console.log(newString1.trim());   // remove unwanted spaces automatically

const url = "http://hitsh.com/hitesh%20choudhary"  // blank space atuomatically replaced by %20 in url for avoiding this we use replace

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

split_Test = "hitesh-hc"

console.log(split_Test.split('-')) // it will split where it found '-'