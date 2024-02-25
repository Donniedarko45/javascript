// properties of get and set...
function User(email,password){
    this._email=email;
    this._password=password

 
    Object.defineProperty(this,"email",{ // _email likhne ki jarurat nai h wo apne aap dekh lega
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this.email=value
        }
    })

    Object.defineProperty(this,"password",{ // _password likhne ki jarurat nai h wo apne aap dekh lega
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this.password=value
        }
    })
    } 

    const chai=new User("chai@gmail.com","chai")
    console.log(chai)
    console.log(chai.email)

