//const tinderUser=new Object() -->singleton object
const tinderUser={}  //-->non singleton object
//console.log(tinderUser)

tinderUser.id="123abc"
tinderUser.name="Donnie darko"
tinderUser.isloggedin= false

//console.log(tinderUser) //type hoga object

const regularuser = {
    email:"someone@gmail.com",
    fullname: {
        userfullname: {              //nesting
            firstname:"some",
            lastname:"one"
        }
    }
}

//console.log(regularuser.fullname)
//console.log(regularuser.fullname.userfullname.lastname)


//+++++++++++++++combining of object++++++++++++++++++


const obj1={1: "a", 2: "b"}
const obj2={3: "r", 4: "e"}

//const obj3=Object.assign(obj1,obj2) //isko krne se sara value obj1 mai store ho rha hai

//console.log(obj1)
//one more syntax.. we give empty paranthesis jisse suppose obj1 aur 2 h toh sari value uss empty paranthesis me ja rhi hai

//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)
//console.log(obj1) //abb dekho obj1 me sari value store nai ho rhi hai


//again most used syntax of merging object...(spread wla concept ...obj1,...obj2)

const obj3={...obj1, ...obj2}
//console.log(obj3)


//jab database se value aayi hai..

//array ka object..

const users = [
    {
        id: 1,
        email: "halloween@gmail.com"
    },
    {
        id: 1,
        email: "halloween@gmail.com"
    },{
        id: 1,
        email: "halloween@gmail.com"
    },{
        id: 1,
        email: "halloween@gmail.com"
    },
]
users[1].email //accessing data

console.log(Object.keys(tinderUser));  //datatypes -object  
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


