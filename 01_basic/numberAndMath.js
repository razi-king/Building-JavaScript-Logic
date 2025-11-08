// -------------------------- Number ----------------------------------
const score = 100
console.log(score);
console.log(typeof score);
const scoreTwo = new Number(200);
console.log(scoreTwo);
console.log(typeof scoreTwo); // It Is A Number But If It Is Made Using New Keyword Then It Is Fall Under The Number Object Category

// ----------------------- Methods --------------------------
console.log(scoreTwo.toString().length);
console.log(scoreTwo.toString);
let balance = 400.838493
console.log(balance.toFixed(2)) // fixed Function Take One Number Argument Based On The Number 
// It Will Fixed The Number After The Point Example 100.399393 => Become 100.34 If Argument Is 2
// Also toFixed Method Return The Output In String
console.log(typeof balance.toFixed());

const number = 12.328383
console.log(number.toPrecision(3));
// It Will SomeWhat Same To The ToFixed Method Take One Number argument And Return Value In String But It Also Follow The Basic Rule That If Number Is Greater Than Or Equal To 5 Than It Will Increase The Number One Point Else It Will Leave The Number As It Is
console.log(typeof number.toPrecision(3));
// ToLocaleStringMethod
const hundreds = 10000000
console.log(hundreds.toLocaleString());
// We Can Use This IN A Way To See Our Value OR Amount A More Pleasing To Eye And A Little Bit Help In Readability
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
// It Is A Built In Library In Java Script
console.log(Math);
