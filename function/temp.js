const a=[1,2,3,4,5]
const squaring=a.map(num=>num*num);
console.log(squaring)


// Define an object
const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

// Iterate over the properties of the object
for (let key in person) {
    console.log(key + ': ' + person[key]);
}