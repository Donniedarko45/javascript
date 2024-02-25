//object literals

//for symbol access
const mySym = Symbol("key1");

const Jsuser = {
  "full name": "Someone",
  age: 18,
  [mySym]: "mykey1",
  location: "in a hell",
  email: "whouyou@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//console.log(Jsuser[mySym])
//console.log(Jsuser.email)
console.log(Jsuser["email"]); //one more method for accessing elements
console.log(Jsuser["full name"]); //agr name me space h toh aise dot se access nai hoga uske liye yai [] wla hi lagana hoga

Jsuser["full name"] = "adarsh"; //isse change ho gya name

//Object.freeze(Jsuser) //abb jsuser me koi change nai hoga

Jsuser.age = 50;
console.log(Jsuser.age); //age 50 me change nai hua h because hmne object me change krna freeze kr diya h

console.log(Jsuser[mySym]);
console.log(typeof mySym);
console.log(Jsuser);

Jsuser.greeting = function () {
  console.log("Hello Js user");
};
Jsuser.greetingTwo = function () {
  console.log(`Hello Js user,${[this["full name"]]}`); //if space is not in full name suppose its only name instead of full name then we write ${this.name}
};
console.log(Jsuser.greetingTwo());

console.log(Jsuser.greeting());
