//Dates....->ye ekk object hai

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString()); //ye simply date bss bta dega
let myCreatedDate = new Date(2024,3,5); //month 0 se start hote hai
console.log(myCreatedDate.toDateString());
let myCreatedDateone = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDateone.toLocaleString()); //to locale string time bhi print kra skta hai
let myCreatedDatetwo = new Date("12-1-2023"); // iss notation me month 0 se nai 1 se start hoga
console.log(myCreatedDatetwo.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
let newDate = new Date();
newDate.toLocaleDateString("default", {
  weekday: "long",
});
