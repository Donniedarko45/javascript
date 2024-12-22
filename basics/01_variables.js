const account_id = 144553 // for declaration of constant we use const keyword

// var keyword ka use nai krna h agr hum var keyword ka use kiye aur ekk code me koi naya line baad me lagaya same name se var use karke toh sabme wai latest value change ho jati thi isliye hum  let naam ka keyword use karenge.

let account_email = "hello@gmail.com" //use let instead of var
var account_password = "me"
account_city =  "dehradun" //bina kissi keyword ka use kiye bhi use kar skte h par ye tareeka acha nahi hai
let account_state= 34
/*
prefer not to use var because of issue var because of issue in block scope and functional scope

*/

// account_id = 2 not allowed

account_email = "hihiii@gmail.com"
var account_password = "me34"
account_city =  "basti"
account_email="someone@gmail.com"

console.log(account_id);
console.table([account_email,account_password,account_city,account_state]);   //account_state me kuch nai likha h isliye undefined dikha rha h.
//console.log(typeof account_state)



function LEt(){
    if(true){
        let y=8;
        //console.log(y);
    }
    console.log(y);
}
LEt();
//console.log(y)