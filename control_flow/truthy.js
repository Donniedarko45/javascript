const useremail="no_one@gmail.com"
if(useremail) {
    console.log("got user email");
} else {
    console.log("dont have user email");
} //if empty string then its false if empty array than its true and printed "got user email"

//falsy values..

/*false,0,-0, BigInt 0n,"",null,undefined,NaN -->inn sabko falsy value mana jata hai*/


//some truthy values..

 /*   "0",`false`," ",[],{},function(){}   */

 if(useremail.length===0){
    console.log("array is empty")
 }

 const emptyobj={}

 if(Object.keys(emptyobj).length===0){
    console.log("object is empty")
 }else{
    console.log("object is not empty")
 } //to check object is empty or not