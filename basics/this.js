"use strict";

//console.log(this) // global object->window,global {depends upon where are you running the code}

function x(){
    // the value depends upon strict and non-strict mode
    console.log(this)  
}
x(); // =>undefined in script mode
/*
window.x() =>window in non-script mode => run this in browser
*/

// this substitution => if the value of this keyword is undefined or null this keyword will be replaced with global object only in {non script mode}..

/*
 in script mode it is undefined

 this keyword value depends on how the function is called{window}

*/

const obj = {
    a:10,
    // x is an method of an object obj
    x:function(){
        console.log(this)
        console.log(this.a)
    }
}
//obj.x()

/*
call,apply,bind {sharing methods}
*/

const obj2={
    details:{
        name:"kartikey",
        rollno:54,
        batch:39
    },
    printName:function(){
        console.log(this.details)
    }
}
obj2.printName()
console.log(typeof(obj2.details))

