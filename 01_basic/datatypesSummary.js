// Primitive Data Types Also Known As // Value Data Types
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt
// All Primitive Datatypes Are Call By Value
// What Are The Symbol 
// It Is Used In Advancd JavaScript
const id = Symbol('123')
const anotherId = Symbol('123');
console.log(id == anotherId); // It Will Give Us False
console.log(id === anotherId); // It Will Alsoi Give Us Falses
// Let's Check What Is The Value Inside Them
console.log(id);
console.log(anotherId);

console.log(typeof id);
console.log(typeof anotherId);

const bigNumber = 8383492834757773974n;
console.log(typeof bigNumber);


// Reference (Non Primitive) Data Types:

// Array, Object, Function

const heros = ["Shaktimaan", "Ben Ten", "Perman"] // Array

let myObj = {
    name:"Razi",
    age: 20,
    email: "r@gmail.com"
}; // This Is Object


const myFunctiont = function(){
    console.log("Hello World");  
}
const myFunction = ()=>{
    console.log("Hello World");  
}

console.log(typeof myFunction);
console.log(typeof myFunctiont);

// Not The Return TYpe Of Function Is Function But 
// The Hitesh Said That IT Will Be Function Object And All The PRimitive Data Type Have The Same
// Type That Is Object

// IF You Wanted To Master The JavaScript Then You Have To Must Focus On The 
// Object And Browser Web Events Or Browser Events

// JavaScript Is Dynamic Language 

// ++++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++

// Two Types Stack And Heap
// All Primitive DataType Uses Stack Memory
// All NonPrimitive DataType Uses Heap Memory

// When We Use Stack Memory We Get The Actual Value
// Where As In Heap Memory We Get The Reference

let myInstagramUserName = "xx_razi_xx_143"

let anotherUserName = myInstagramUserName

console.log(myInstagramUserName);
console.log(anotherUserName);

anotherUserName = "RAZIKING"
console.log(myInstagramUserName);
console.log(anotherUserName);

// let myArr = ["King", "Kong", "Godzilla"]

// let secondArr = myArr

// console.log(myArr);
// console.log(secondArr);

// secondArr[1] = "Bandar"

// console.log(myArr);
// console.log(secondArr);

let userOne = {
    email: "user@gmail.com",
    upi: "upi@ybl"
}

let userTwo = userOne
console.log(userOne);
console.log(userTwo);

userTwo.email = "user2@gmail.ocm"

console.log(userOne);
console.log(userTwo);
// In Non Primitive IF One Value Change Then THe Other Value Also Change But In Primite All 
// All Variable Behave Or Act Independently So That One Variable Change Does Not Affect Another Variable

// Let's See Why This Scenario(Below Code) Is Happening

let myArr = ["King", "Kong", "Godzilla"]

let secondArr = myArr

console.log(myArr);
console.log(secondArr);

secondArr = ["Joker", "Bandar", "Chipkali"]

console.log(myArr);
console.log(secondArr);