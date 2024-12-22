 const user = {
    username: "kartikey",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);  //if we have to access or refer the current context then instead of using only ${username} write it as ${this.username}
    }
 }
 user.welcomeMessage(this)
 user.username="kartikey"
 user.welcomeMessage(this)

 //function chai(){
   // let username="kartikey"
    //console.log(this.username) // (this) khali object me work aa rha hai function me ye undefined de rha hai
 //}
 //chai()


 const chai =()=> {           //function ko hta do aur () ke baad => likh do aur (this.username) ki jagah khali (username) likho
   let username = "kartikey"
   console.log(username)

 }
 chai()
 //arrow function

 /*const addtwo=(num1,num2)=>{
  return num1+num2
}
console.log(addtwo(4,5))*/


//++++++++implicit return+++++++++++++++++=>matlab return na lagana padega

const addtwo=(num1,num2) => (num1+num2)
console.log(addtwo(4,5))
