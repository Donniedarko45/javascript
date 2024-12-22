function User(username,loginCount,isLoggedIn){
    this.username=username;  //left hand side wla username  variable hai aur right side wla username pass krke jo value aa rhi wo hai
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

const userOne=User("kartikey",8,true)
const userTwo=User("adarsh",69,false) //here we are making another object and passing it into fxn User() but there is no more problem if we are printing userOne,userTwo value is getting printed because it overrides the userOne

//console.log(userOne);

//thats why we are using contructor function...we jst have to update new keyword in declaration

const userthree=new User("kartikey",87,true)
const userFour=new User("adarsh",47,false)
console.log(userthree.constructor);
console.log(userFour);

//whenever we use new keyword an object is created and constructor function is called and argument what we have written in function is injected and in fourth step what we have written will be passed

/*learn intsanceof from docs */
