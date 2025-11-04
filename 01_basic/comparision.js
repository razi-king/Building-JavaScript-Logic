// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=2);
// console.log(2==2);

// console.log("2" > 1);
// console.log("02" >= 2);
// comparision and equality check
console.log(null > 0); 

console.log(null >= 0);

console.log(null == 0);
console.log(null <= 0);
// the Reason for the strange Behaviour Is This That The Equlity check == and 
// Comparision > < >= <= Work Differently
// Comparision Covert null to a number It As 0.
// That's Why 2 (null >= 0) && 4 (null <= 0 ) Is True and null>0 Is False

console.log(undefined > 0);

console.log(undefined >= 0);

console.log(undefined == 0);

console.log(undefined <= 0);

// strict check === (===) it check value of two data and also their data type
//  if both are equal in value and data type then it will give true else false
console.log("2"==2);
console.log("2"===2);

console.log(1==true); // It Will Return True When Comparing With One In Every Other Case It W8ill Be False
console.log(0==false); // It Will Return jTrue When Comparing With Zero In Every Other Case It IS False

console.log(1<=true);
console.log(0>=false);