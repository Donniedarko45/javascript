const person = {
    name : ["kartikey","adarsh"],
    age:[18,19],
    bio(){
        console.log(`${this.name[0]} is of age ${this.age[0]} years old`)
    },
}
person.bio()
console.log(person);