// prop-->properties..

class User{
    constructor(username,email,password){
        this.username=username
        this.eamil=email
    }

    logMe(){
        console.log(`username: ${this.username}`);
        console.log(`email is: ${this.email}`)
    }

    static createId(){
        return `123`
    }
} // ye hmko access dene se rokk dega

const kartikey=new User("kartikey")
//console.log(kartikey.createId())-->isliye ye print nai hoga..

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
        
    }
}

const Iphone = new Teacher("iphone","ip@gmail.com")

console.log(Iphone.logMe())