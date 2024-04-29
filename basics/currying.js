function add(a,b,c){
    return function(b){
        return function(c){
            return a+b+c
        };
    };
}

/*
function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`sending Email to ${to} with subject ${subject}: ${body}`)
        }
    }
}

let step1=sendAutoEmail("kartikey224252@gmail.com");
let step2=step1("New order confirmation");
let step3=step2("Hey kartikey there is something for you")

console.log(add(8)(3)(45))  //jabtak teeno parameter pass nai kroge tabtak hmko final output nai milega*/
 

// how to write it in modern way
const sendAutoEmail=(to)=>(subject)=>(body)=>`sending Email to ${to} with subject ${subject}: ${body}`;

let step1=sendAutoEmail("kartikey224252@gmail.com");
let step2=step1("New order confirmation");
console.log(step3=step2("Hey kartikey there is something for you"))