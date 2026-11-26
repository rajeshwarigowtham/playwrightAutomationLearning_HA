//1. Primitive datypes
//string
var firstName = "Rajeshwari"
console.log(firstName, typeof firstName)
//null
var companyName =null    
console.log(companyName, typeof companyName)
//number
var mobileNumber = 45678906789
console.log(mobileNumber, typeof mobileNumber)
//bigint
var mobileNumber = 4567890678923456789345n
console.log(mobileNumber, typeof mobileNumber)
//boolean
var isAutomation = true
console.log(isAutomation, typeof isAutomation)
//undefined
var hasPlaywright 
console.log(hasPlaywright, typeof hasPlaywright)

//2. var, let and const
const browserVersion ="Chrome"
function getBrowserVersion(){
    if(browserVersion==="Chrome"){
        console.log("It's a chrome browser");
        var browserVersion=22.19    // try with var and let
    }
    console.log(browserVersion);
}
getBrowserVersion()
