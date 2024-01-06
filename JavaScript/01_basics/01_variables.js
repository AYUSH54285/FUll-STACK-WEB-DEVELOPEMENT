const accountId = 144553
let accountEmail = "ayush@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // it is undefined

// accountId = 2    //not allowed

// console.log(accoundId)

accountEmail = "a@gmail.com"
accountPassword = "123"
accountCity = "patna"

// for printing all use console.table

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer to not use var because in issue of 
block scope and functional scope
*/