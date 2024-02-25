class User{
    constructor(username,mail,password){
        this.username=username;
        this.password=password;
    }

    logMe(){
        console.log(`chai is ${this.username}`);
        console.log(`password is: ${this.password}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) //super keyword automatically set kr dega def-->The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        this.email=email;
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai@teacher.com","123")
chai.logMe()
chai.addCourse();
const masalaChai=new User("chai","chai@teacher.com","123")
masalaChai.logMe()

console.log(chai instanceof User) // kya chai User se bna h ye btata h
