const arr=[1,2,3,4,5]
for(const num of arr){
     //console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings ){
    //console.log(greet);
}

// maps

const map=new Map()
map.set('IN',"india")
map.set('USA',"united state of america")
map.set('Fr',"France")
console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

// object ke liye for of loop nai kam krta hai