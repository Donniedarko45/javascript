const arr=[1,2,3,4,5]
for(const num of arr){
     console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings ){
    console.log(greet);
}

// maps

const map=new Map()
map.set('IN',"india")
map.set('USA',"united state of america")
map.set('Fr',"France")
map.set('Fr',"hello")// updates fr=>key value from france to hello..
map.delete('USA')// it deletes key with its value 
console.log(map);
for(const [key,value] of map){
    console.log(key,':-',value);
}


/*const myobj={
    'game1':"nfs",
    'game2':"spiderman"
};
for (const [key,value] of myobj){
    console.log(key,":-",value);  // object ke liye for of loop nai kam krta hai
}*/