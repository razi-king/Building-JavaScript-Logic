// let score = "33";

// console.log(typeof score);

// console.log(typeof(score));

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// console.log(typeof(valueInNumber));

// Here We Try To Take A Input That Is Not A Number 
// let score = "33abc";

// console.log(typeof score);

// console.log(typeof(score));

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// When We First Do This It Will Conver The Number And Give Us That The Type Of Value In Number Is Number 
// But As We Know The Value Of Score Is Not A Number So How Can We Are Getting A Number In Type

// console.log(typeof(valueInNumber));

// So For This We Say Let's Check What Is The Value In The ValueInNumber Variable

// console.log(valueInNumber);

// Now We Get NaN When Printing The ValueInNumber So For This We Understand That When We Convert A Non Number Into The Integer
// It Will Convert And Become Type Number But It Always Store The Value i.e. NaN (Not A Number)
// But We Want That No So We Can Study It In Future How To Handle This
// Now Let See What Will Happen When We Put The Null In the Score Or Undefined

// let score = null;

// console.log(typeof score);

// console.log(typeof(score));

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// console.log(typeof(valueInNumber));

// This Null Value Also Giving Us Type Number But Let's See What Is The Value Of Converted Null

// console.log(valueInNumber);

// So When Converting Null To Number It Convert In A Number 0 Suppose If We Want Tempreture From The Server And It May Return Zero 
// But Zero Can Also Be Termed As Tempreture So In That Case We Use Null 

// Let's See What Will Happen if We Use undefined

// let score = undefined;

// console.log(typeof score);

// console.log(typeof(score));

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// console.log(typeof(valueInNumber));

// It Also Converted INto The type Number 

// console.log(valueInNumber);

// It's Value Is NaN When Converting Non Number From String Or Undefined It Will Convert The Value In Number And Give Us NaN Value
// Other Hand Null Converted To Zero

// Now Let See What Will Happen When We Use boolean that Is True Or False

// let valOne = true

// let valTwo = false

// console.log(typeof valOne);

// console.log(typeof(valTwo));

// let conValOne = Number(valOne);

// let conValTwo = Number(valTwo);

// console.log(typeof conValOne);

// console.log(typeof(conValTwo));


// True Will Give The 1 In Number And False Will Give The 0

// console.log(conValOne);

// console.log(conValTwo);

// Now See What Happen When We Do With Boolean 

// let isLoggedIn = undefined

// let checkIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof checkIsLoggedIn)

// console.log(checkIsLoggedIn);


// Case One: Any Number Except 0 Is True Even 0.1 Is Also True  Zero Is False

// Case Two: "" => Is False Any Other String Except EmptyString Is true "Razi" => true

// Case Three null Will Always Return In False And Same Is True For Undefined


// Convert In String 

// let num = 33;

// let stringNum = String(num);

// console.log(stringNum);

// console.log(typeof stringNum);

// let num = true;

// let stringNum = String(num);

// console.log(stringNum);

// console.log(typeof stringNum);

// We Convert Num And Bool In To The String And The Value Do not Change Just It Is Represent Inside  the  '' or ""

// and Their Type Become string

let num = undefined;

let stringNum = String(num);

console.log(stringNum);

console.log(typeof stringNum);

// For Null And Undefined The Also Converted Into String And Their Value Do Not change Just Appear Inside '' or "" quotes

