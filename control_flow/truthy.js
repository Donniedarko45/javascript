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

 // nullish coalescing operator(??): null and undefined

 let val1;
 val1=5??10
 val1=null??10
 console.log(val1)

 val2=undefined??15
 console.log(val2)

 val3=null??10??25
 console.log(val3);


 //ternary operator
 /*condition ? true : false*/

 const priceoftea=100
 priceoftea<=75? console.log("less than 75"):console.log("greater than 75")