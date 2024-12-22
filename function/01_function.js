/*function saymyname() {
console.log("k");
console.log("a");
console.log("r");
console.log("t");
console.log("i");
console.log("k");
console.log("e");
console.log("y");
}*/

function addtwonumbers(number1,number2)
{
    let result=(number1+number2);
   return number1+number2
}
//console.log(typeof addtwonumbers(3,4) )

function loginuserMessage(username="sam") {
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `
}
//console.log(loginuserMessage("no-one")) 

console.log(loginuserMessage())