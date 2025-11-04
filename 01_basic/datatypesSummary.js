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