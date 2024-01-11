let score = "hello"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33 ye number h
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "kartikey"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false empty string false aata hai
// "kartikey" => true (string me kch likh do true)

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "kartikey "

let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
//console.log("1" + 2 + 2); //agar string pehle h toh sabko ekk jaisa treat karega 
//console.log(1 + 2 + "2"); // agr string baad me h toh sabko pehle jod dega fir sum aur string print ho jayega

// console.log( 3 + 4 * 5 % 3); pehle multiplication (4*5=20) fir modulus (20%3=2) fir final (3+2=5)

// console.log(+true);=1 output
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //sbke andar 4 hai par ye aise nai likha jata for user....

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion