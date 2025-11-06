// What Is LInting Feautre Or I May Heard It Wrong Built In Feature
let name = "Razi"
let repoCount = 19

// If I Have To Write Name Or repoCount Together I Can Write It Using + or , 
console.log("My Name Is "+name+" And My Repo Count "+repoCount); // With Plus We Need To Care About Spaces Before And After Adding The Variable
console.log("My Name Is",name,"And My Repo Count",repoCount); // With Comma We Don't Need To Care About Spaces Before And After Adding The Variable

// But This Is The Old Technique And In Modern Time It Is Not A Good Practice To Use It

// So Now We Use String Interpolation 

console.log(`My Name Is ${name} And My Repo Count Is ${repoCount}`);
// IN This Case We CaN Directly Write The Variable Inside The String Or Backtics Present Over The Tab Key

// It Is A Modern Way To Write Java Script Today

// It Is Another Way To Create A String Usinge New Keyword And String Constructor
const newString = new String("RAziKing");
// Following Are The Methods Of String
// length Method Will Tell Us THe Size Or The Length Of The String
console.log(newString.length);
// __proto__ It Is A Method Which Act As An Object And Contain Various Sub Method 
console.log(newString.__proto__);

// charAt Mehtod It Will Take Index Number And Tell Us Which Charecter Is Present On That Method
console.log(newString.charAt(2));

// indexOf Method It Will Take The Charecter And Tell Us Which Index Number That Character Is Belongs
// ----------------------------------------
console.log(newString[0]);
const secondString = newString.substring(4);
console.log(`New String Is ${newString} And Second String Is ${secondString}`);

// But If I Do This
const thirdString = newString.substring(0,4);
console.log(`New String Is ${newString} And Second String Is ${thirdString}`);
// So The Difference Between One Parameter And Two Parameter Is That The One Parameter Is Only Say Where To Start And It Will End On When String Will End Automatically Or As I Can See From Above The Code Bu Seeing Method Working
// The Two Parameter SubString Method Will Take Start And The End Value And It Will Start From The First Value(index Number) And End Before The Last Value (index Number) So In Case OF Last Value We Have To Stop Or Method Stop Before The Last Index Value Reached One Step Before Reaching IT
//  
