class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get password(){
        return `${this._password}`;
    }
    // if we defined getter then we have to define setter

    set password(value){
        this._password = value;
    }
}

const kartikey=new User("kartikey@gmail.com","lop785")
console.log(kartikey.password) // suppose we dont want to give access the password then to overcome this we use getter and setter
