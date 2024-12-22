function SetUsername(username){
    //complex DB calls 
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);

const arr=[10,20,30,40]
console.log(arr[10])