/*Try To Study In Investigative Way  */

const accountId = "74384"; /* Any Variable Which Is Assign Using const Keyword Cannot Be Reassign To Another Value That Means
                             That Mean The Value Of The Variable Remain Same Throughout The Program
                             Also We Can't Re Declared It
                             It Is A Block Level Variable
                          */ 
   // accountId = "kkdid" // It Value Cannot Be Change As It Is Declared With Const Keyword Doing So Will Result Or Give Us Runtime Error
let accountEmail = "r@r.com"; /* Any Variable Which Is Asigh Using let Keyword Cannot Be Redeclared 
                                 But We Can Change The Value Of That Variable
                                 It Is A Block Variable 
                              */

var accountName = "Razi"; /* Any Variable That Is Declared Using var Keyword Can Be Reassign Or Redefined 
                             Through Out The Program
                             It Is A Global Variable
                          */
accountCity = "Mumbai";
/* If I Want To Print All The Values On The Console For The Variable I Can Use Console.log But There Is Also One More Method
   That Is console.table() */
   console.table([`This Is Account Email ${accountEmail}`, accountId, accountName, accountCity])  // It Take Array As A Parameter
/* Prefer Not To Use Var
   As It Has Issue Of Block Scope And Functional Scope
*/